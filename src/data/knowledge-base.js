export const cyberKnowledgeBase = {
  'phishing': {
    q: 'What is Phishing?',
    a: 'Phishing is a cyberattack method where attackers send fraudulent emails, messages, or create fake websites to trick people into revealing sensitive information like passwords, credit card details, or personal data. Attackers impersonate trusted organizations to gain credibility.',
    tips: ['Never click links in suspicious emails', 'Verify sender email addresses', 'Look for spelling errors and poor grammar', 'Enable multi-factor authentication']
  },
  'cybersecurity': {
    q: 'What is Cybersecurity?',
    a: 'Cybersecurity is the practice of protecting systems, networks, software, and data from digital attacks, unauthorized access, and disruption. It encompasses technical safeguards, policies, user awareness, and continuous monitoring to preserve confidentiality, integrity, and availability of information.',
    tips: ['Use layered defenses', 'Adopt security policies and governance', 'Monitor networks and logs continuously', 'Train employees regularly', 'Plan for incidents and recovery']
  },
  'ddos': {
    q: 'What is DDoS?',
    a: 'DDoS (Distributed Denial of Service) is a cyberattack where multiple compromised systems overwhelm a target server, network, or service with a flood of traffic, making it unavailable to legitimate users. Attackers use botnets to amplify the attack volume and exhaust system resources.',
    tips: ['Use DDoS protection services', 'Implement rate limiting and traffic filtering', 'Deploy CDN and load balancers', 'Monitor traffic patterns for anomalies', 'Have incident response plans ready']
  },
  'ransomware': {
    q: 'What is Ransomware?',
    a: 'Ransomware is malware that encrypts files and demands payment for decryption. Modern ransomware also exfiltrates data for double extortion.',
    tips: ['Maintain offline backups', 'Use EDR solutions', 'Implement network segmentation', 'Never pay ransom']
  },
  'sql injection': {
    q: 'What is SQL Injection?',
    a: 'SQL injection attacks work by inserting malicious SQL code into input fields, allowing attackers to bypass authentication, access unauthorized data, modify database records, or execute administrative operations.',
    tips: ['Use parameterized queries', 'Implement input validation', 'Apply WAF rules', 'Use least privilege database accounts']
  },
  'zero trust': {
    q: 'What is Zero Trust Architecture?',
    a: 'Zero Trust assumes threats exist inside and outside networks, requiring verification of every user, device, and application before granting access.',
    tips: ['Verify explicitly', 'Use least privilege', 'Assume breach', 'Monitor continuously']
  },
  'mfa': {
    q: 'What is Multi-Factor Authentication?',
    a: 'MFA requires multiple verification methods such as passwords, security keys, biometrics, or one-time codes to confirm user identity.',
    tips: ['Enable MFA everywhere', 'Use authenticator apps', 'Keep backup codes', 'Use security keys']
  }
};

export const attackPathLibrary = {
  sqlInjection: {
    title: 'SQL Injection Attack Path',
    description: 'User-controlled input is weaponized to tamper with database queries and exfiltrate records.',
    path: [
      { stage: 'Reconnaissance', detail: 'Attacker maps input fields and error messages to learn how queries are built.' },
      { stage: 'Injection', detail: 'Crafted payload breaks query structure and forces the database to run attacker SQL.' },
      { stage: 'Data Access', detail: 'Sensitive tables are dumped, modified, or deleted once execution succeeds.' },
      { stage: 'Pivot or Cleanup', detail: 'Attacker plants backdoors or erases logs to hide database tampering.' }
    ],
    defenses: [
      'Parameterize every query and enforce strict typing',
      'Limit database privileges to least privilege service accounts',
      'Deploy WAF rules for injection signatures and anomaly spikes',
      'Centralize logging to detect unusual query volume'
    ]
  },
  xss: {
    title: 'Cross-Site Scripting Attack Path',
    description: 'Untrusted script executes inside the victim browser, hijacking trust in the application.',
    path: [
      { stage: 'Payload Planting', detail: 'Attacker injects script via comment, form, or crafted URL and stores or reflects it.' },
      { stage: 'Victim Trigger', detail: 'User loads the tainted page and the browser renders attacker script as if trusted.' },
      { stage: 'Session Theft', detail: 'Script steals cookies, tokens, or DOM data and forwards it to attacker server.' },
      { stage: 'Account Abuse', detail: 'Captured identity is reused to move laterally, deface pages, or pivot to other users.' }
    ],
    defenses: [
      'Encode output for the correct context (HTML, JS, URL)',
      'Adopt Content Security Policy with strict script-src rules',
      'Sanitize rich text inputs and block dangerous tags',
      'Regenerate session tokens after privilege changes'
    ]
  },
  ransomware: {
    title: 'Ransomware Attack Path',
    description: 'Access, escalate, encrypt, and extort across the environment.',
    path: [
      { stage: 'Initial Access', detail: 'Phishing attachment or exposed remote service delivers the loader.' },
      { stage: 'Privilege Escalation', detail: 'Credentials are harvested and admin tools abused for dominance.' },
      { stage: 'Lateral Movement', detail: 'Payload fans out, disables backups, and stages encryption keys.' },
      { stage: 'Encryption & Extortion', detail: 'Files are encrypted, data is exfiltrated, and ransom notes appear.' }
    ],
    defenses: [
      'Harden remote access with MFA and network segmentation',
      'Monitor privilege escalation and new admin tool launches',
      'Maintain offline, immutable backups with recovery drills',
      'Practice incident response and legal/communications playbooks'
    ]
  }
};

export const behaviorScenarioLibrary = {
  suspiciousEmail: {
    title: 'Suspicious Email Drop',
    description: 'An unexpected payroll update email urges you to open an attached spreadsheet immediately.',
    rightAction: 'Hover over links, verify with HR via trusted channel, and report the email to security.',
    wrongAction: 'Download the sheet, enable macros, and answer the fake payroll form.',
    outcome: 'Credential stealer implants persistence and replays your session tokens within minutes.',
    staySafe: [
      'Slow down when urgency and rewards appear together',
      'Inspect sender domain spelling and SPF results',
      'Open attachments only after sandboxing or IT validation'
    ]
  },
  fakeLogin: {
    title: 'Fake Login Portal',
    description: 'You click a chat link that opens a perfect copy of the corporate SSO page.',
    rightAction: 'Close the tab, retype the official URL manually, and check certificate details.',
    wrongAction: 'Enter username, password, and OTP on the cloned site.',
    outcome: 'Attackers harvest real credentials and start impossible travel logins seconds later.',
    staySafe: [
      'Bookmark official portals and use password manager autofill',
      'Verify certificates and padlock details before authenticating',
      'Enable push-based MFA that warns about unrecognized requests'
    ]
  },
  publicWifi: {
    title: 'Public Wi-Fi Trap',
    description: 'A free airport Wi-Fi pops up without authentication while you prep slides.',
    rightAction: 'Use a trusted hotspot or corporate VPN before signing in anywhere.',
    wrongAction: 'Join the open network and log into email plus cloud storage in plaintext.',
    outcome: 'Man-in-the-middle attacker captures cookies and injects fake update prompts.',
    staySafe: [
      'Prefer personal hotspots over unknown infrastructure',
      'Force HTTPS and VPN tunnels before sensitive work',
      'Disable auto-connect to remembered open networks'
    ]
  }
};

export const hygieneLibrary = [
  'Update operating systems, browsers, and firmware every week',
  'Enable multi-factor authentication everywhere possible',
  'Use a password manager with unique passphrases per account',
  'Back up critical files using the 3-2-1 strategy',
  'Review account activity logs and revoke unused access regularly',
  'Segment home and work networks with separate WiFi profiles',
  'Run endpoint protection and auto scans on every device'
];

export const fallbackDefenses = [
  'Verify unexpected messages and report suspicious requests immediately',
  'Enable password managers, MFA, and least-privilege access',
  'Patch operating systems, browsers, and critical applications quickly',
  'Maintain offline backups and monitor for unusual account activity'
];
