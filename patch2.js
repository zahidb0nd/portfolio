const fs = require('fs');
const file = 'src/sections/Contact.tsx';
let content = fs.readFileSync(file, 'utf8');

const searchSendEmail = `<SecureLink href={\`mailto:\${EMAIL}\`}>
                  <Mail className="mr-2 w-5 h-5" /> Send Email
                </SecureLink>`;
const replaceSendEmail = `<SecureLink href={\`mailto:\${EMAIL}\`} aria-label="Send Email">
                  <Mail className="mr-2 w-5 h-5" /> Send Email
                </SecureLink>`;
content = content.replace(searchSendEmail, replaceSendEmail);

const searchLinkedIn = `<SecureLink
              href="https://linkedin.com"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
              target="_blank"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </SecureLink>`;
const replaceLinkedIn = `<SecureLink
              href="https://linkedin.com"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
              target="_blank"
              aria-label="Visit LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </SecureLink>`;
content = content.replace(searchLinkedIn, replaceLinkedIn);

const searchGithub = `<SecureLink
              href="https://github.com"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
              target="_blank"
            >
              <Github className="w-5 h-5" /> GitHub
            </SecureLink>`;
const replaceGithub = `<SecureLink
              href="https://github.com"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
              target="_blank"
              aria-label="Visit GitHub Profile"
            >
              <Github className="w-5 h-5" /> GitHub
            </SecureLink>`;
content = content.replace(searchGithub, replaceGithub);

fs.writeFileSync(file, content);
