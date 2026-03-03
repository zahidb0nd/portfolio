const fs = require('fs');
const file = 'src/sections/Projects.tsx';
let content = fs.readFileSync(file, 'utf8');

const importReplacement = `import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SecureLink } from "@/components/SecureLink";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";`;

content = content.replace(/import \{ Github, ExternalLink \} from "lucide-react";\nimport \{ Button \} from "@\/components\/ui\/button";\nimport \{ SecureLink \} from "@\/components\/SecureLink";/, importReplacement);

const searchBlock = `<div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <SecureLink
                      href={project.githubLink}
                      target="_blank"
                      className="flex items-center gap-2"
                      aria-label={\`View source code for \${project.name}\`}
                    >
                      <Github className="w-4 h-4" /> Code
                    </SecureLink>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <SecureLink
                      href={project.liveLink}
                      target="_blank"
                      className="flex items-center gap-2"
                      aria-label={\`View live demo of \${project.name}\`}
                    >
                      <ExternalLink className="w-4 h-4" /> Demo
                    </SecureLink>
                  </Button>
                </div>`;

const replaceBlock = `<div className="flex gap-3">
                  {project.githubLink === "#" ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span tabIndex={0} className="cursor-not-allowed inline-block rounded-md">
                          <Button variant="outline" size="sm" className="pointer-events-none opacity-50 flex items-center gap-2" aria-disabled="true" tabIndex={-1}>
                            <Github className="w-4 h-4" /> Code
                          </Button>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent><p>Private Repository</p></TooltipContent>
                    </Tooltip>
                  ) : (
                    <Button variant="outline" size="sm" asChild>
                      <SecureLink href={project.githubLink} target="_blank" className="flex items-center gap-2" aria-label={\`View source code for \${project.name}\`}>
                        <Github className="w-4 h-4" /> Code
                      </SecureLink>
                    </Button>
                  )}
                  {project.liveLink === "#" ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span tabIndex={0} className="cursor-not-allowed inline-block rounded-md">
                          <Button variant="outline" size="sm" className="pointer-events-none opacity-50 flex items-center gap-2" aria-disabled="true" tabIndex={-1}>
                            <ExternalLink className="w-4 h-4" /> Demo
                          </Button>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent><p>Demo Unavailable</p></TooltipContent>
                    </Tooltip>
                  ) : (
                    <Button variant="outline" size="sm" asChild>
                      <SecureLink href={project.liveLink} target="_blank" className="flex items-center gap-2" aria-label={\`View live demo of \${project.name}\`}>
                        <ExternalLink className="w-4 h-4" /> Demo
                      </SecureLink>
                    </Button>
                  )}
                </div>`;

content = content.replace(searchBlock, replaceBlock);
fs.writeFileSync(file, content);
