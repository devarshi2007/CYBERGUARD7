const cyberKnowledgeBase = {
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
    'network security fundamentals': {
        q: 'What are Network Security Fundamentals?',
        a: 'Network security fundamentals include controlling access, segmenting networks, encrypting data in transit, monitoring traffic, and applying least-privilege principles on every device and service. Firewalls, IDS/IPS, secure protocols, and regular updates create defense in depth against unauthorized access and attacks.',
        tips: ['Use firewalls and IDS/IPS', 'Segment networks with VLANs or micro-segmentation', 'Encrypt traffic with TLS or IPsec', 'Harden network devices', 'Monitor and log network activity']
    },
    'computer virus': {
        q: 'What is a Computer Virus?',
        a: 'A computer virus is a type of malware that attaches itself to legitimate programs or files and replicates when the host executes. Viruses can corrupt data, slow systems, display unwanted messages, or spread to other devices over networks or removable media. Antivirus software and safe usage practices reduce infection risk.',
        tips: ['Install antivirus and keep it updated', 'Avoid opening unknown attachments', 'Disable autorun on removable media', 'Keep backups of important files', 'Update operating systems regularly']
    },
    'update software': {
        q: 'Why Is It Important to Update Software?',
        a: 'Software updates patch known vulnerabilities, improve stability, and add security features. Attackers often exploit outdated software because fixes are public but not applied. Keeping operating systems, applications, and firmware updated closes security gaps and prevents many common attacks.',
        tips: ['Enable automatic updates', 'Prioritize critical security patches', 'Maintain an update schedule', 'Test updates before production rollout', 'Track patch status across devices']
    },
    'virus vs worm': {
        q: 'What Is the Difference Between a Virus and a Worm?',
        a: 'Viruses need a host file and user action to execute, while worms are standalone programs that self-propagate over networks without human interaction. Worms typically exploit vulnerabilities to spread rapidly, whereas viruses often hitchhike on documents, installers, or removable media.',
        tips: ['Scan attachments before opening', 'Disable autorun on USB media', 'Patch network services promptly', 'Monitor unusual network spikes']
    },
    'http vs https': {
        q: 'What Is the Difference Between HTTP and HTTPS?',
        a: 'HTTP transmits data in plain text, making it easy to intercept, while HTTPS wraps HTTP inside TLS/SSL encryption to protect confidentiality and integrity. HTTPS also authenticates the server via certificates, preventing impersonation.',
        tips: ['Always enter credentials on HTTPS sites', 'Use HSTS to enforce HTTPS', 'Monitor certificates for expiry', 'Redirect all HTTP traffic to HTTPS']
    },
    'brute force attack': {
        q: 'What Is a Brute Force Attack?',
        a: 'Brute force attacks systematically try every possible password or key combination until the correct one is found. Attackers automate guesses and can leverage credential stuffing or password spraying to target many accounts.',
        tips: ['Use long unique passwords', 'Enable account lockout policies', 'Deploy MFA to stop credential-only attacks', 'Monitor login anomalies']
    },
    'botnet': {
        q: 'What Is a Botnet?',
        a: 'A botnet is a network of compromised devices remotely controlled by an attacker (botmaster). Botnets launch DDoS attacks, send spam, mine cryptocurrency, or distribute malware at scale.',
        tips: ['Keep devices patched', 'Use endpoint protection', 'Monitor outbound traffic spikes', 'Disable unnecessary remote services']
    },
    'data breach': {
        q: 'What Is a Data Breach?',
        a: 'A data breach is the unauthorized exposure, access, or theft of sensitive information such as personal records, intellectual property, or credentials. Breaches result from hacking, misconfigurations, lost devices, or insider threats.',
        tips: ['Encrypt sensitive data', 'Apply least privilege', 'Monitor for exfiltration', 'Maintain incident response plans']
    },
    'sql injection 1': { q: 'What is SQL injection attack methodology?', a: 'SQL injection attacks work by inserting malicious SQL code into input fields, allowing attackers to bypass authentication, access unauthorized data, modify database records, or execute administrative operations.', tips: ['Use parameterized queries', 'Implement input validation', 'Apply WAF rules', 'Use least privilege database accounts'] },
    'xss 1': { q: 'How does reflected XSS work?', a: 'Reflected XSS attacks inject malicious scripts through URLs or form inputs that execute immediately in the victim\'s browser when the page loads, stealing cookies or session tokens.', tips: ['Encode output properly', 'Validate user inputs', 'Use Content Security Policy', 'Enable HttpOnly cookie flags'] },
    'csrf 1': { q: 'What is CSRF token verification?', a: 'CSRF tokens are unique values generated per session that prevent forged requests by requiring matching tokens in sensitive operations, protecting users from unauthorized actions.', tips: ['Implement CSRF tokens', 'Use SameSite cookies', 'Verify referrer headers', 'Implement proper session management'] },
    'malware 1': { q: 'What are malware distribution channels?', a: 'Malware is distributed through compromised websites, malicious email attachments, infected software installers, USB drives, and peer-to-peer networks.', tips: ['Use antivirus software', 'Enable auto-updates', 'Avoid suspicious downloads', 'Monitor network traffic'] },
    'phishing 1': { q: 'How to identify phishing emails?', a: 'Phishing emails often have suspicious sender addresses, urgent language, requests for sensitive information, malicious links, or mismatched URLs. Look for poor grammar and generic greetings.', tips: ['Hover over links to verify', 'Check sender email domain', 'Report suspicious emails', 'Enable email filtering'] },
    'ransomware 1': { q: 'What is ransomware encryption?', a: 'Ransomware uses RSA or AES encryption to lock files, making them inaccessible until a ransom is paid. Modern ransomware also exfiltrates data for double extortion.', tips: ['Maintain offline backups', 'Use EDR solutions', 'Implement network segmentation', 'Never pay ransom'] },
    'ddos': {
        q: 'What is DDoS?',
        a: 'DDoS (Distributed Denial of Service) is a cyberattack where multiple compromised systems overwhelm a target server, network, or service with a flood of traffic, making it unavailable to legitimate users. Attackers use botnets to amplify the attack volume and exhaust system resources.',
        tips: ['Use DDoS protection services', 'Implement rate limiting and traffic filtering', 'Deploy CDN and load balancers', 'Monitor traffic patterns for anomalies', 'Have incident response plans ready']
    },
    'ddos 1': { q: 'What is volumetric DDoS attack?', a: 'Volumetric DDoS attacks flood targets with massive amounts of traffic to consume bandwidth and make services unavailable using botnets or amplification techniques.', tips: ['Use DDoS mitigation', 'Implement rate limiting', 'Deploy CDN services', 'Monitor traffic patterns'] },
    'brute force 1': { q: 'What is password spraying?', a: 'Password spraying attempts many usernames with common passwords across systems to avoid lockout detection while discovering valid credentials.', tips: ['Implement account lockout', 'Use MFA', 'Monitor failed logins', 'Enforce strong passwords'] },
    'privilege escalation 1': { q: 'What is vertical privilege escalation?', a: 'Vertical privilege escalation occurs when users gain higher privileges than authorized, such as moving from user to administrator access through exploits or misconfigurations.', tips: ['Apply security patches', 'Restrict admin accounts', 'Monitor privilege use', 'Implement RBAC'] },
    'man in the middle 1': { q: 'How do MITM attacks intercept communication?', a: 'MITM attacks intercept network traffic between two parties, capturing sensitive data or modifying communications through packet sniffing, ARP spoofing, or DNS hijacking.', tips: ['Use HTTPS/TLS', 'Verify certificates', 'Enable VPN', 'Use certificate pinning'] },
    'network 1': { q: 'What is network segmentation?', a: 'Network segmentation divides networks into isolated zones to limit lateral movement, contain breaches, and enforce security policies on traffic between segments.', tips: ['Implement VLANs', 'Use firewalls', 'Monitor inter-segment traffic', 'Apply least privilege'] },
    'encryption 1': { q: 'What is end-to-end encryption?', a: 'End-to-end encryption ensures only sender and recipient can read messages by encrypting data on the sender\'s device and decrypting on the recipient\'s device.', tips: ['Use verified protocols', 'Protect encryption keys', 'Verify recipients', 'Use strong algorithms'] },
    'authentication 1': { q: 'What is multi-factor authentication?', a: 'MFA requires multiple verification methods such as passwords, security keys, biometrics, or one-time codes to confirm user identity.', tips: ['Enable MFA everywhere', 'Use authenticator apps', 'Keep backup codes', 'Use security keys'] },
    'authorization 1': { q: 'What is role-based access control?', a: 'RBAC grants permissions to roles rather than individual users, simplifying access management and ensuring users have only necessary permissions for their functions.', tips: ['Define clear roles', 'Review permissions regularly', 'Use groups', 'Apply least privilege'] },
    'firewall 1': { q: 'What is stateful firewall?', a: 'Stateful firewalls track connection states and allow legitimate return traffic while blocking unsolicited inbound traffic, improving security compared to stateless firewalls.', tips: ['Configure rules carefully', 'Monitor blocked traffic', 'Use defense in depth', 'Update regularly'] },
    'ids ips 1': { q: 'What is the difference between IDS and IPS?', a: 'IDS detects intrusions and alerts administrators while IPS actively blocks detected attacks, sitting inline in network traffic.', tips: ['Deploy both IDS/IPS', 'Tune signatures', 'Integrate with SIEM', 'Keep definitions updated'] },
    'antivirus 1': { q: 'How does antivirus detect malware?', a: 'Antivirus uses signature-based detection, heuristic analysis, and behavioral monitoring to identify known and unknown malware threats.', tips: ['Keep signatures updated', 'Use real-time protection', 'Scan regularly', 'Use multiple engines'] },
    'vpn 1': { q: 'What does a VPN protect?', a: 'VPNs encrypt internet traffic, hide IP addresses, and protect against eavesdropping, particularly important on public WiFi networks.', tips: ['Use reputable VPN', 'Check no-logs policy', 'Verify encryption', 'Never use free VPNs for sensitive tasks'] },
    'wireless 1': { q: 'What is WPA3 security?', a: 'WPA3 is the latest WiFi security standard with individualized data encryption, protection against brute-force attacks, and simultaneous authentication of equals (SAE).', tips: ['Upgrade to WPA3', 'Disable WPS', 'Use strong passwords', 'Hide SSID'] },
    'password 1': { q: 'What makes a strong password?', a: 'Strong passwords are at least 12-16 characters, include uppercase, lowercase, numbers, special characters, and avoid dictionary words or personal information.', tips: ['Use password managers', 'Avoid reuse', 'Change regularly', 'Enable 2FA'] },
    'backup 1': { q: 'What is the 3-2-1 backup rule?', a: 'The 3-2-1 rule recommends keeping 3 copies of data, on 2 different media types, with 1 copy stored offsite to protect against data loss.', tips: ['Automate backups', 'Test restoration', 'Keep offline backups', 'Encrypt backups'] },
    'incident response 1': { q: 'What are incident response phases?', a: 'Incident response includes preparation, detection, analysis, containment, eradication, recovery, and post-incident activities.', tips: ['Create IR plan', 'Train team', 'Prepare playbooks', 'Conduct drills'] },
    'forensics 1': { q: 'What is digital forensics?', a: 'Digital forensics collects, preserves, analyzes, and presents digital evidence from devices and systems to support investigations while maintaining chain of custody.', tips: ['Use write-blockers', 'Document everything', 'Preserve hash values', 'Follow proper procedures'] },
    'threat intelligence 1': { q: 'What is threat intelligence?', a: 'Threat intelligence is analyzed information about threats, threat actors, attack patterns, and vulnerabilities to inform security decisions.', tips: ['Subscribe to feeds', 'Monitor dark web', 'Correlate data', 'Share information'] },
    'vulnerability assessment 1': { q: 'What is vulnerability scanning?', a: 'Vulnerability scanning automatically identifies security weaknesses, missing patches, misconfigurations, and known vulnerabilities in systems and networks.', tips: ['Scan regularly', 'Prioritize findings', 'Remediate quickly', 'Track metrics'] },
    'penetration testing 1': { q: 'What is the scope of penetration testing?', a: 'Penetration testing scope defines what systems can be tested, testing methods allowed, dates, and rules of engagement to ensure legal and ethical testing.', tips: ['Get authorization', 'Define scope clearly', 'Document findings', 'Provide recommendations'] },
    'compliance 1': { q: 'What is GDPR?', a: 'GDPR is European regulation requiring organizations to protect personal data, obtain consent, report breaches within 72 hours, and respect user rights.', tips: ['Identify data', 'Implement controls', 'Document procedures', 'Prepare for audits'] },
    'hipaa 1': { q: 'What does HIPAA require?', a: 'HIPAA mandates healthcare organizations protect patient data through administrative, physical, and technical safeguards and breach notification within 60 days.', tips: ['Implement security', 'Conduct risk assessments', 'Train staff', 'Maintain documentation'] },
    'pci dss 1': { q: 'What is PCI-DSS?', a: 'PCI-DSS requires organizations handling credit cards to implement security controls including network security, strong access controls, and regular testing.', tips: ['Maintain compliance', 'Use encryption', 'Monitor systems', 'Get certified'] },
    'iso 27001 1': { q: 'What is ISO 27001?', a: 'ISO 27001 is an international standard for information security management establishing requirements for implementing, maintaining, and improving information security.', tips: ['Implement ISMS', 'Conduct assessments', 'Get certified', 'Review regularly'] },
    'nist 1': { q: 'What is NIST Cybersecurity Framework?', a: 'NIST CSF provides guidelines with five core functions: Identify, Protect, Detect, Respond, and Recover to manage cybersecurity risk.', tips: ['Map controls', 'Implement functions', 'Assess maturity', 'Improve continuously'] },
    'zero trust 1': { q: 'What is Zero Trust architecture?', a: 'Zero Trust assumes threats exist inside and outside networks, requiring verification of every user, device, and application before granting access.', tips: ['Verify identity', 'Encrypt everything', 'Monitor activity', 'Apply least privilege'] },
    'cloud security 1': { q: 'What is cloud security?', a: 'Cloud security protects data, applications, and infrastructure in cloud environments through shared responsibility between providers and customers.', tips: ['Understand shared responsibility', 'Use strong IAM', 'Encrypt data', 'Monitor activity'] },
    'devsecops 1': { q: 'What is DevSecOps?', a: 'DevSecOps integrates security practices into software development and operations, automating security testing and enabling rapid secure deployments.', tips: ['Integrate security tools', 'Automate scanning', 'Train developers', 'Shift left'] },
    'secure coding 1': { q: 'What are secure coding practices?', a: 'Secure coding includes input validation, output encoding, proper error handling, secure use of cryptography, and regular security testing.', tips: ['Use libraries properly', 'Avoid hardcoding secrets', 'Handle errors safely', 'Update dependencies'] },
    'api security 1': { q: 'What is API security?', a: 'API security protects interfaces through authentication, authorization, input validation, rate limiting, and monitoring to prevent unauthorized access and abuse.', tips: ['Require authentication', 'Use API keys', 'Rate limit', 'Monitor usage'] },
    'container security 1': { q: 'What is container security?', a: 'Container security includes securing images, runtime environments, orchestration platforms, and monitoring containerized applications.', tips: ['Scan images', 'Use minimal bases', 'Limit privileges', 'Monitor runtime'] },
    'kubernetes 1': { q: 'What is Kubernetes security?', a: 'Kubernetes security includes RBAC, network policies, pod security, secrets management, and regular updates to protect containerized workloads.', tips: ['Enable RBAC', 'Use network policies', 'Secure secrets', 'Update regularly'] },
    'threat modeling 1': { q: 'What is threat modeling?', a: 'Threat modeling systematically identifies potential attackers, assets, attack surfaces, and mitigations early in design using frameworks like STRIDE.', tips: ['Start early', 'Update regularly', 'Document assumptions', 'Review with teams'] },
    'red team 1': { q: 'What is red teaming?', a: 'Red teaming simulates adversary tactics to test organizational defenses, identify gaps, and improve security posture.', tips: ['Get authorization', 'Define scope', 'Coordinate with blue team', 'Document findings'] },
    'social engineering 1': { q: 'What are social engineering tactics?', a: 'Social engineering tactics include pretexting, baiting, tailgating, and manipulation to trick people into revealing information or bypassing security.', tips: ['Train employees', 'Verify identities', 'Be skeptical', 'Report incidents'] },
    'insider threat 1': { q: 'What is insider threat?', a: 'Insider threats come from employees or partners with authorized access who intentionally or negligently compromise security.', tips: ['Monitor activity', 'Apply least privilege', 'Background checks', 'Security awareness'] },
    'supply chain 1': { q: 'What is supply chain security?', a: 'Supply chain security protects against attacks targeting vendors, dependencies, and third-party integrations to ensure software integrity.', tips: ['Vet vendors', 'Monitor dependencies', 'Verify signatures', 'Test updates'] },
    'ransomware defense 1': { q: 'How to defend against ransomware?', a: 'Ransomware defense includes user training, email filtering, endpoint protection, network segmentation, offline backups, and incident response planning.', tips: ['Block suspicious emails', 'Disable macros', 'Backup regularly', 'Have recovery plans'] },
    'apt defense 1': { q: 'How to detect APT attacks?', a: 'APT detection involves monitoring for unusual network activity, credential usage, process execution, and using threat intelligence to identify campaign indicators.', tips: ['Hunt actively', 'Baseline normal activity', 'Correlate events', 'Use threat intel'] },
    'network monitoring 1': { q: 'What is network monitoring?', a: 'Network monitoring captures and analyzes traffic to detect threats, troubleshoot issues, and ensure compliance with security policies.', tips: ['Deploy sensors', 'Analyze traffic', 'Baseline normal', 'Alert on anomalies'] },
    'log management 1': { q: 'What is centralized log management?', a: 'Centralized logging collects logs from all systems into one repository for analysis, correlation, and compliance reporting.', tips: ['Aggregate logs', 'Correlate events', 'Retain long-term', 'Search efficiently'] },
    'siem 1': { q: 'What is SIEM?', a: 'SIEM collects, analyzes, and correlates security events from across infrastructure to detect threats and support incident response.', tips: ['Deploy SIEM', 'Tune rules', 'Integrate sources', 'Investigate alerts'] },
    'machine learning security 1': { q: 'How is machine learning used in security?', a: 'ML detects anomalies, identifies new threats, predicts attacks, and automates threat detection and response.', tips: ['Train properly', 'Validate models', 'Avoid bias', 'Monitor performance'] },
    'cyber deception 1': { q: 'What is cyber deception?', a: 'Cyber deception uses honeypots, canaries, and decoys to detect attacks, gather intelligence, and misdirect attackers.', tips: ['Deploy deceptions', 'Monitor closely', 'Analyze interactions', 'Integrate alerts'] },
    'quantum cryptography 1': { q: 'What is quantum key distribution?', a: 'Quantum key distribution uses quantum mechanics to detect eavesdropping and establish secure communication channels.', tips: ['Understand limitations', 'Plan adoption', 'Combine with classical crypto', 'Monitor research'] },
    'biometric security 1': { q: 'What are biometric authentication methods?', a: 'Biometric methods include fingerprints, facial recognition, iris scanning, and voice recognition for identity verification.', tips: ['Use as factor', 'Store securely', 'Protect templates', 'Combine factors'] },
    'hardware security keys 1': { q: 'What are hardware security keys?', a: 'Hardware security keys are physical devices that store cryptographic keys and authenticate users without transmitting secrets to servers.', tips: ['Use reputable brands', 'Keep backup keys', 'Secure storage', 'Support recovery'] },
    'passwordless auth 1': { q: 'What is passwordless authentication?', a: 'Passwordless authentication uses biometrics, security keys, push notifications, or cryptographic keys instead of passwords.', tips: ['Plan migration', 'Support fallback', 'Test thoroughly', 'Train users'] },
    'certificate management 1': { q: 'What is certificate management?', a: 'Certificate management includes generation, deployment, renewal, and revocation of digital certificates for secure communication.', tips: ['Automate renewal', 'Track expiry', 'Use best practices', 'Rotate keys'] },
    'tls ssl 1': { q: 'What is TLS handshake?', a: 'TLS handshake negotiates encryption algorithms, verifies server identity, and establishes session keys for secure communication.', tips: ['Use TLS 1.3', 'Update cipher suites', 'Monitor handshake failures', 'Validate certs'] },
    'dns security 1': { q: 'What is DNSSEC?', a: 'DNSSEC signs DNS records to prevent spoofing and ensure DNS query responses are authentic and unmodified.', tips: ['Enable DNSSEC', 'Monitor validation', 'Manage keys', 'Update regularly'] },
    'email security 1': { q: 'What email security controls exist?', a: 'Email security includes SPF, DKIM, DMARC for authentication, filtering for malware and phishing, and encryption for sensitive messages.', tips: ['Implement DMARC', 'Filter threats', 'Encrypt sensitive', 'Train users'] },
    'web app security 1': { q: 'What are web application firewall rules?', a: 'WAF rules filter HTTP traffic to block common attacks like SQL injection, XSS, and path traversal while allowing legitimate requests.', tips: ['Deploy WAF', 'Tune rules', 'Test coverage', 'Monitor blocks'] },
    'nosql injection 1': { q: 'What is NoSQL injection?', a: 'NoSQL injection exploits vulnerabilities in NoSQL databases by injecting malicious code into queries to access unauthorized data.', tips: ['Use parameterized queries', 'Validate input', 'Apply least privilege', 'Test thoroughly'] },
    'ldap injection 1': { q: 'What is LDAP injection?', a: 'LDAP injection attacks manipulate LDAP queries through user input to bypass authentication or access unauthorized directory information.', tips: ['Escape special characters', 'Validate input', 'Use libraries', 'Test security'] },
    'code injection 1': { q: 'What is code injection?', a: 'Code injection inserts malicious code into applications through user input, allowing remote code execution and data theft.', tips: ['Validate inputs', 'Use sandboxing', 'Apply filters', 'Test regularly'] },
    'os command injection 1': { q: 'What is OS command injection?', a: 'OS command injection exploits applications that execute system commands with unsanitized user input, allowing attackers to run arbitrary commands.', tips: ['Avoid system calls', 'Use safer alternatives', 'Validate input', 'Restrict permissions'] },
    'header injection 1': { q: 'What is HTTP header injection?', a: 'Header injection attacks manipulate HTTP headers through unsanitized input, enabling cache poisoning and session fixation attacks.', tips: ['Validate headers', 'Encode output', 'Use framework protection', 'Monitor anomalies'] },
    'insecure direct object reference': { q: 'What is IDOR vulnerability?', a: 'IDOR vulnerabilities occur when applications allow direct access to objects by ID without proper authorization checks.', tips: ['Verify authorization', 'Use indirect references', 'Audit access', 'Test systematically'] },
    'broken access control': { q: 'What is broken access control?', a: 'Broken access control allows unauthorized users to access resources or perform actions they shouldn\'t have permission for.', tips: ['Implement proper checks', 'Use frameworks', 'Test access', 'Regular audits'] },
    'security misconfiguration': { q: 'What is security misconfiguration?', a: 'Security misconfiguration includes default credentials, unnecessary services, debug modes, and improper permissions enabling unauthorized access.', tips: ['Use hardening guides', 'Remove defaults', 'Disable unnecessary services', 'Regular audits'] },
    'unvalidated redirect': { q: 'What are unvalidated redirects?', a: 'Unvalidated redirects allow attackers to redirect users to malicious sites through user-controlled input in redirect functions.', tips: ['Validate URLs', 'Whitelist destinations', 'Warn users', 'Use HTTPS'] },
    'open redirect': { q: 'What is open redirect vulnerability?', a: 'Open redirect allows attackers to craft URLs that redirect users to external malicious websites for phishing or credential harvesting.', tips: ['Validate destination', 'Use whitelist', 'Require user action', 'Monitor redirects'] },
    'server side request forgery': { q: 'What is SSRF attack?', a: 'SSRF attacks trick servers into making requests to internal or external systems, accessing internal services or performing actions on behalf of the attacker.', tips: ['Validate URLs', 'Disable internal access', 'Use allowlists', 'Network segmentation'] },
    'race condition': { q: 'What is time-of-check to time-of-use (TOCTOU)?', a: 'TOCTOU race conditions occur between security checks and resource usage, allowing attackers to exploit the gap.', tips: ['Use atomic operations', 'Add locks', 'Test concurrency', 'Validate again'] },
    'type confusion': { q: 'What is type confusion vulnerability?', a: 'Type confusion occurs when applications mishandle different data types, leading to unexpected behavior or security bypasses.', tips: ['Use strong typing', 'Validate types', 'Test edge cases', 'Use linters'] },
    'use after free': { q: 'What is use-after-free vulnerability?', a: 'Use-after-free occurs when programs access memory after it has been freed, potentially leading to code execution.', tips: ['Use memory safety languages', 'Add checks', 'Use sanitizers', 'Test thoroughly'] },
    'double free': { q: 'What is double free vulnerability?', a: 'Double free occurs when memory is freed twice, corrupting heap structures and potentially enabling code execution.', tips: ['Track allocation', 'Use smart pointers', 'Test thoroughly', 'Use sanitizers'] },
    'integer overflow': { q: 'What is integer overflow?', a: 'Integer overflow occurs when calculations exceed maximum integer values, causing unexpected behavior or security issues.', tips: ['Use safe math', 'Validate ranges', 'Use larger types', 'Test boundaries'] },
    'stack overflow': { q: 'What is stack overflow vulnerability?', a: 'Stack overflow allows attackers to write beyond buffer boundaries on the stack, potentially overwriting function pointers or return addresses.', tips: ['Use stack canaries', 'Enable ASLR', 'Bounds checking', 'Use safe functions'] },
    'heap overflow': { q: 'What is heap overflow?', a: 'Heap overflow writes beyond allocated memory on the heap, corrupting adjacent objects or enabling code execution.', tips: ['Use bounds checking', 'Monitor allocations', 'Use sanitizers', 'Test thoroughly'] },
    'null pointer dereference': { q: 'What is null pointer dereference?', a: 'Null pointer dereference occurs when programs access memory through null pointers, causing crashes or vulnerabilities.', tips: ['Check for null', 'Use assertions', 'Use static analysis', 'Test thoroughly'] },
    'format string attack': { q: 'What is format string vulnerability?', a: 'Format string attacks exploit format functions with unsanitized user input to read memory, write data, or execute code.', tips: ['Use format specifiers', 'Validate input', 'Use safe functions', 'Static analysis'] },
    'logic bomb': { q: 'What is logic bomb?', a: 'Logic bombs are malicious code embedded in applications that execute when specific conditions are met, causing damage or disruption.', tips: ['Code review', 'Monitor changes', 'Audit logging', 'Background checks'] },
    'backdoor': { q: 'What is backdoor malware?', a: 'Backdoors are hidden access points in systems allowing attackers to bypass normal authentication and maintain persistent access.', tips: ['Monitor access', 'File integrity', 'Network analysis', 'Regular audits'] },
    'rootkit': { q: 'What is rootkit?', a: 'Rootkits hide deep in operating systems to maintain privileged access while concealing attacker activity from detection.', tips: ['Use secure boot', 'TPM validation', 'Offline scanning', 'Monitor processes'] },
    'bootkit': { q: 'What is bootkit?', a: 'Bootkits infect bootloaders and firmware to persist across operating system reinstalls with deep system control.', tips: ['Enable secure boot', 'Firmware updates', 'Monitor boot', 'BIOS security'] },
    'trojan horse': { q: 'What is trojan horse malware?', a: 'Trojans disguise as legitimate software to trick users into installing them, then perform malicious activities.', tips: ['Download safely', 'Use antivirus', 'Verify sources', 'Monitor activity'] },
    'worm': { q: 'What is computer worm?', a: 'Worms are self-propagating malware that spread across networks without user interaction through vulnerabilities.', tips: ['Patch systems', 'Network segmentation', 'Monitoring', 'User awareness'] },
    'spyware': { q: 'What is spyware?', a: 'Spyware secretly monitors user activity, stealing personal information, browsing habits, and credentials.', tips: ['Use anti-spyware', 'Monitor processes', 'Browser security', 'Software safety'] },
    'adware': { q: 'What is adware?', a: 'Adware displays unwanted advertisements and may track browsing habits or distribute other malware.', tips: ['Use ad blockers', 'Safe browsing', 'Regular updates', 'Remove carefully'] },
    'scareware': { q: 'What is scareware?', a: 'Scareware tricks users into believing their systems are infected to purchase fake antivirus or security software.', tips: ['Don\'t panic', 'Verify warnings', 'Use trusted software', 'Report incidents'] },
    'grayware': { q: 'What is grayware?', a: 'Grayware includes potentially unwanted programs like toolbars and bundled software that compromise user privacy or performance.', tips: ['Review installs', 'Uncheck extras', 'Use trusted sources', 'Clean system'] },
    'pup': { q: 'What are potentially unwanted programs?', a: 'PUPs are software that may compromise privacy, system performance, or security, often bundled with legitimate programs.', tips: ['Review installs', 'Uncheck bundles', 'Verify licenses', 'Remove regularly'] },
    'pua': { q: 'What are potentially unwanted applications?', a: 'PUAs include applications with misleading functionality or aggressive advertising that may compromise user privacy.', tips: ['Research before install', 'Review permissions', 'Uninstall promptly', 'Use trusted sources'] },
    'vulnerable dependency': { q: 'What are vulnerable dependencies?', a: 'Vulnerable dependencies are third-party libraries with known security flaws that can compromise application security.', tips: ['Track dependencies', 'Scan regularly', 'Update promptly', 'Use SBOMs'] },
    'supply chain attack': { q: 'What is software supply chain attack?', a: 'Supply chain attacks compromise trusted vendors or dependencies to inject malware into software used by many organizations.', tips: ['Vet vendors', 'Verify signatures', 'Monitor dependencies', 'Isolate systems'] },
    'typosquatting': { q: 'What is typosquatting attack?', a: 'Typosquatting registers domains similar to legitimate ones to trick users into accessing malicious sites.', tips: ['Type carefully', 'Use bookmarks', 'Verify URLs', 'Install extensions'] },
    'watering hole': { q: 'What is watering hole attack?', a: 'Watering hole attacks compromise websites frequently visited by target groups to infect visitors with malware.', tips: ['Update browsers', 'Use security tools', 'Monitor patches', 'Endpoint protection'] },
    'click jacking': { q: 'What is clickjacking attack?', a: 'Clickjacking overlays invisible elements to trick users into clicking unwanted links or buttons.', tips: ['Use X-Frame-Options', 'Check UI carefully', 'Browser settings', 'Frame busting'] },
    'cookie stealing': { q: 'What is cookie theft?', a: 'Cookie theft captures session cookies through XSS or network sniffing to hijack user sessions.', tips: ['Use HTTPS', 'HttpOnly flag', 'Secure flag', 'SameSite cookie'] },
    'session fixation': { q: 'What is session fixation attack?', a: 'Session fixation tricks users into using attacker-controlled session IDs to hijack sessions.', tips: ['Regenerate IDs', 'Use secure cookies', 'Validate sessions', 'Timeout sessions'] },
    'privilege escalation linux': { q: 'What are Linux privilege escalation techniques?', a: 'Linux privilege escalation exploits misconfigurations, SUID binaries, kernel vulnerabilities, or weak permissions.', tips: ['Apply patches', 'Audit permissions', 'Monitor sudo', 'Restrict access'] },
    'privilege escalation windows': { q: 'What are Windows privilege escalation techniques?', a: 'Windows escalation exploits UAC bypasses, unquoted paths, scheduled tasks, or service vulnerabilities.', tips: ['Apply patches', 'Configure UAC', 'Monitor services', 'File permissions'] },
    'lateral movement 1': { q: 'How do attackers perform lateral movement?', a: 'Lateral movement uses compromised credentials, pivoting, and network trust relationships to access other systems.', tips: ['Segment networks', 'Monitor activity', 'Apply MFA', 'Patch systems'] },
    'persistence mechanism 1': { q: 'What are persistence mechanisms?', a: 'Persistence mechanisms enable attackers to maintain access across reboots using backdoors, scheduled tasks, or registry modifications.', tips: ['Monitor changes', 'File integrity', 'Startup analysis', 'Regular audits'] },
    'anti analysis 1': { q: 'What are anti-analysis techniques?', a: 'Anti-analysis techniques help malware evade detection through obfuscation, virtualization detection, and debugger checks.', tips: ['Use sandbox', 'Behavioral analysis', 'Multiple tools', 'Expert review'] },
    'anti forensics 1': { q: 'What are anti-forensics techniques?', a: 'Anti-forensics destroys evidence through log deletion, file wiping, and timeline obfuscation to hinder investigations.', tips: ['Centralized logging', 'Immutable storage', 'Regular backups', 'Monitoring'] },
    'cve1': { q: 'Understanding CVE identifiers?', a: 'CVE (Common Vulnerabilities and Exposures) provides unique identifiers for publicly disclosed vulnerabilities, enabling tracking and remediation.', tips: ['Subscribe to feeds', 'Track relevant CVEs', 'Prioritize patches', 'Maintain inventory'] },
    'cvss1': { q: 'What is CVSS scoring?', a: 'CVSS (Common Vulnerability Scoring System) rates vulnerability severity from 0-10 based on exploitability and impact.', tips: ['Understand metrics', 'Prioritize high scores', 'Consider context', 'Track metrics'] },
    'cpe1': { q: 'What is CPE notation?', a: 'CPE (Common Platform Enumeration) standardizes identification of hardware, operating systems, and applications for vulnerability tracking.', tips: ['Maintain inventory', 'Use CPE identifiers', 'Track assets', 'Align systems'] },
    'cwe1': { q: 'What is CWE classification?', a: 'CWE (Common Weakness Enumeration) categorizes software weaknesses and vulnerabilities to help prevent similar issues.', tips: ['Review CWE list', 'Develop defenses', 'Train developers', 'Secure coding'] },
    'owasp1': { q: 'What is OWASP Top 10?', a: 'OWASP Top 10 lists the most critical web application security risks including broken access control and injection attacks.', tips: ['Review list', 'Test applications', 'Implement controls', 'Train team'] },
    'capec1': { q: 'What is CAPEC?', a: 'CAPEC (Common Attack Pattern Expression and Enumeration) describes attack patterns and techniques to help develop defenses.', tips: ['Study patterns', 'Understand ATT&CK', 'Develop defenses', 'Red team'] },
    'stix1': { q: 'What is STIX?', a: 'STIX (Structured Threat Information Expression) standardizes cybersecurity threat information for sharing and analysis.', tips: ['Use STIX format', 'Share intelligence', 'Automate correlation', 'Integrate tools'] },
    'taxii1': { q: 'What is TAXII?', a: 'TAXII (Trusted Automated eXchange of Indicator Information) defines protocols for sharing threat intelligence using STIX.', tips: ['Share intelligence', 'Use TLS', 'Authenticate peers', 'Monitor feeds'] },
    'mitre attck1': { q: 'What is MITRE ATT&CK?', a: 'MITRE ATT&CK documents adversary tactics and techniques based on real-world observations to support threat modeling.', tips: ['Map TTPs', 'Create detections', 'Red team', 'Test defenses'] },
    'sigma1': { q: 'What is Sigma?', a: 'Sigma defines a generic signature format for log entries enabling detection rules to work across multiple platforms.', tips: ['Write rules', 'Share rules', 'Convert rules', 'Test detection'] },
    'yara1': { q: 'What is YARA?', a: 'YARA identifies and classifies malware using pattern matching rules for malware analysis and detection.', tips: ['Write rules', 'Share rules', 'Update signatures', 'Test coverage'] },
    'snort1': { q: 'What is Snort IDS?', a: 'Snort is an open-source network intrusion detection system using rules to detect suspicious traffic patterns.', tips: ['Deploy Snort', 'Write rules', 'Tune detection', 'Update rules'] },
    'suricata1': { q: 'What is Suricata?', a: 'Suricata is a network IDS/IPS engine using the Suricata language for high-performance threat detection.', tips: ['Deploy Suricata', 'Write rules', 'Tune settings', 'Update rules'] },
    'zeek1': { q: 'What is Zeek?', a: 'Zeek is a network monitoring platform that analyzes traffic for security incidents and generates logs for analysis.', tips: ['Deploy Zeek', 'Analyze logs', 'Write scripts', 'Correlate data'] },
    'metasploit1': { q: 'What is Metasploit?', a: 'Metasploit is a penetration testing framework providing exploits, payloads, and tools for security assessments.', tips: ['Use legally', 'Get authorization', 'Test safely', 'Document findings'] },
    'burp suite1': { q: 'What is Burp Suite?', a: 'Burp Suite is a web application security testing platform for finding vulnerabilities in web applications.', tips: ['Scan applications', 'Manual testing', 'Exploit vulnerabilities', 'Document findings'] },
    'nessus1': { q: 'What is Nessus?', a: 'Nessus is a vulnerability scanner that identifies security weaknesses in systems and networks.', tips: ['Run scans', 'Prioritize findings', 'Remediate issues', 'Track progress'] },
    'openvas1': { q: 'What is OpenVAS?', a: 'OpenVAS is an open-source vulnerability scanner and management framework for vulnerability assessment.', tips: ['Deploy OpenVAS', 'Configure scans', 'Analyze results', 'Track remediation'] },
    'wireshark1': { q: 'What is Wireshark?', a: 'Wireshark is a network protocol analyzer for capturing and analyzing network traffic in detail.', tips: ['Capture traffic', 'Analyze packets', 'Apply filters', 'Export data'] },
    'tcpdump1': { q: 'What is tcpdump?', a: 'tcpdump is a command-line network packet capture tool for capturing and analyzing network traffic.', tips: ['Capture traffic', 'Write filters', 'Save captures', 'Analyze offline'] },
    'ghidra1': { q: 'What is Ghidra?', a: 'Ghidra is a reverse engineering framework for analyzing binary files and malware samples.', tips: ['Analyze binaries', 'Decompile code', 'Find vulnerabilities', 'Share findings'] },
    'ida pro1': { q: 'What is IDA Pro?', a: 'IDA Pro is a commercial disassembler and debugger for reverse engineering and malware analysis.', tips: ['Analyze binaries', 'Use plugins', 'Automate tasks', 'Document analysis'] },
    'radare21': { q: 'What is Radare2?', a: 'Radare2 is an open-source reverse engineering framework with analysis and debugging capabilities.', tips: ['Analyze binaries', 'Write scripts', 'Automate analysis', 'Community tools'] },
    'angr1': { q: 'What is angr?', a: 'angr is a Python framework for binary analysis and symbolic execution for vulnerability discovery.', tips: ['Write scripts', 'Analyze binaries', 'Exploit finding', 'Automate analysis'] },
    'volatility1': { q: 'What is Volatility?', a: 'Volatility is a framework for analyzing volatile memory (RAM) from systems to investigate malware and intrusions.', tips: ['Analyze memory dumps', 'Extract artifacts', 'Correlate evidence', 'Document findings'] },
    'autopsy1': { q: 'What is Autopsy?', a: 'Autopsy is a digital forensics platform for analyzing hard drives and mobile devices.', tips: ['Analyze drives', 'Extract artifacts', 'Create timelines', 'Document findings'] },
    'splunk1': { q: 'What is Splunk?', a: 'Splunk is a platform for searching, monitoring, and analyzing machine data for security and operations.', tips: ['Collect data', 'Create searches', 'Alert on events', 'Build dashboards'] },
    'elastic stack1': { q: 'What is Elastic Stack?', a: 'Elastic Stack (ELK) combines Elasticsearch, Logstash, and Kibana for log management and analysis.', tips: ['Ingest logs', 'Parse data', 'Visualize data', 'Create alerts'] },
    'splunk security1': { q: 'What is Splunk Enterprise Security?', a: 'Enterprise Security adds security-specific functionality to Splunk for threat detection and incident response.', tips: ['Deploy module', 'Configure dashboards', 'Create detections', 'Investigate threats'] },
    'servicenow ir1': { q: 'What is ServiceNow Incident Response?', a: 'ServiceNow IR platform manages incident response workflows and case tracking for security teams.', tips: ['Track incidents', 'Automate workflows', 'Assign tasks', 'Document response'] },
    'falconsense1': { q: 'What is CrowdStrike Falcon?', a: 'CrowdStrike Falcon is an endpoint detection and response (EDR) platform providing threat protection.', tips: ['Deploy agents', 'Configure policies', 'Monitor endpoints', 'Investigate threats'] },
    'carbonblack1': { q: 'What is VMware Carbon Black?', a: 'Carbon Black is an endpoint protection platform for detecting and responding to threats.', tips: ['Deploy agents', 'Monitor activity', 'Respond to threats', 'Analyze behavior'] },
    'crowdstrike next gen1': { q: 'What is CrowdStrike Next-Gen EDR?', a: 'CrowdStrike Next-Gen provides advanced endpoint detection with machine learning and behavioral analysis.', tips: ['Deploy agents', 'Tune detection', 'Investigate incidents', 'Improve detection'] },
    'tanium1': { q: 'What is Tanium?', a: 'Tanium provides endpoint visibility and management for security and operations teams.', tips: ['Deploy client', 'Query endpoints', 'Track inventory', 'Respond to incidents'] },
    'sentinelone1': { q: 'What is SentinelOne?', a: 'SentinelOne offers autonomous endpoint protection using behavioral threat prevention and AI.', tips: ['Deploy agent', 'Enable protection', 'Monitor threats', 'Investigate incidents'] },
    'malwarebytes1': { q: 'What is Malwarebytes?', a: 'Malwarebytes provides endpoint protection against malware, ransomware, and PUPs.', tips: ['Deploy software', 'Update definitions', 'Monitor scans', 'Quarantine threats'] },
    'kaspersky1': { q: 'What is Kaspersky?', a: 'Kaspersky offers antivirus and endpoint security solutions for businesses and consumers.', tips: ['Deploy software', 'Update definitions', 'Configure policies', 'Monitor alerts'] },
    'mcafee1': { q: 'What is McAfee?', a: 'McAfee provides antivirus, endpoint protection, and mobile security solutions.', tips: ['Deploy software', 'Enable protection', 'Update signatures', 'Configure policies'] },
    'symantec1': { q: 'What is Symantec Norton?', a: 'Symantec Norton offers consumer and business antivirus and security software.', tips: ['Install software', 'Enable protection', 'Maintain subscription', 'Update regularly'] },
    'qualys1': { q: 'What is Qualys VMDR?', a: 'Qualys VMDR (Vulnerability Management Detection Response) scans for vulnerabilities and tracks remediation.', tips: ['Configure scans', 'Prioritize findings', 'Track remediation', 'Report compliance'] },
    'rapid71': { q: 'What is Rapid7 Nexpose?', a: 'Rapid7 Nexpose is a vulnerability scanner providing insights into security weaknesses.', tips: ['Run scans', 'Analyze results', 'Create reports', 'Track metrics'] },
    'tenable io1': { q: 'What is Tenable.io?', a: 'Tenable.io is a cloud-based vulnerability management platform for continuous monitoring.', tips: ['Configure scans', 'Analyze vulnerabilities', 'Create reports', 'Track progress'] },
    'empire1': { q: 'What is Empire framework?', a: 'Empire is a PowerShell-based post-exploitation framework for lateral movement and data exfiltration.', tips: ['Use legally', 'Training purposes', 'Understand TTPs', 'Defend against'] },
    'covenant1': { q: 'What is Covenant?', a: 'Covenant is a .NET-based adversary simulation framework for red teaming.', tips: ['Use ethically', 'Get authorization', 'Simulate attacks', 'Improve defense'] },
    'cobalt strike1': { q: 'What is Cobalt Strike?', a: 'Cobalt Strike is a commercial red team operations platform for adversary simulation.', tips: ['Authorized use', 'Team coordination', 'Simulate attacks', 'Report findings'] },
    'mimikatz1': { q: 'What is Mimikatz?', a: 'Mimikatz is a tool for extracting credentials from Windows systems for post-exploitation.', tips: ['Understand risks', 'Authorized use', 'Defend against', 'Monitor usage'] },
    'hashcat1': { q: 'What is Hashcat?', a: 'Hashcat is an advanced password recovery tool for cracking hashes using GPUs.', tips: ['Authorized use', 'Understand rules', 'Build wordlists', 'Track time'] },
    'john the ripper1': { q: 'What is John the Ripper?', a: 'John the Ripper is a password cracking tool supporting multiple hash formats.', tips: ['Authorized use', 'Create rules', 'Optimize performance', 'Track progress'] },
    'aircrack ng1': { q: 'What is Aircrack-ng?', a: 'Aircrack-ng is a suite of tools for wireless network auditing and WEP/WPA cracking.', tips: ['Authorized use', 'Own network', 'Test security', 'Improve defense'] },
    'nmap1': { q: 'What is Nmap?', a: 'Nmap is a network scanning tool for discovering hosts, ports, and services on networks.', tips: ['Authorized scans', 'Identify services', 'Version detection', 'Script automation'] },
    'masscan1': { q: 'What is Masscan?', a: 'Masscan is a fast internet-scale network scanner for rapid port enumeration.', tips: ['Authorized scans', 'High speed', 'Large networks', 'Integrate results'] },
    'zmap1': { q: 'What is Zmap?', a: 'Zmap is an internet-wide network scanner for research and security studies.', tips: ['Authorized use', 'Research purposes', 'Large-scale scans', 'Data analysis'] },
    'sqlmap1': { q: 'What is SQLmap?', a: 'SQLmap is an automated tool for detecting and exploiting SQL injection vulnerabilities.', tips: ['Authorized testing', 'Identify vulnerabilities', 'Extract data', 'Generate reports'] },
    'nikto1': { q: 'What is Nikto?', a: 'Nikto is a web server scanner detecting outdated versions, default files, and vulnerabilities.', tips: ['Scan websites', 'Identify issues', 'Generate reports', 'Remediate'] },
    'wpscan1': { q: 'What is WPScan?', a: 'WPScan is a WordPress security scanner identifying plugin vulnerabilities and misconfigurations.', tips: ['Scan WordPress', 'Update plugins', 'Review themes', 'Harden config'] },
    'joomlascan1': { q: 'What is Joomla Scanner?', a: 'Joomla Scanner identifies vulnerabilities and misconfigurations in Joomla installations.', tips: ['Scan installations', 'Update components', 'Review permissions', 'Harden security'] },
    'compliance6': { q: 'CyberESI Compliance 6?', a: 'Cyber Essentials demonstrates commitment to cybersecurity best practices.', tips: ['Implement controls', 'Self-assess', 'Certification options', 'Maintain compliance'] },
     'compliance7': { q: 'CyberESI Compliance 7?', a: 'Cyber Essentials Plus extends Cyber Essentials with additional controls.', tips: ['Implement controls', 'Self-assess', 'Certification options', 'Maintain compliance'] },        
     'sms bombing': { q: 'What is SMS bombing?', a: 'SMS bombing is a cyber attack that floods a target\'s mobile device with a large number of text messages, causing disruption and inconvenience.', tips: ['Use spam filters', 'Block unknown numbers', 'Report abuse', 'Limit app permissions'] },  
     'futurecyberthreats': { q: 'What are future cybersecurity threats?', a: 'Future cybersecurity threats include AI-powered attacks, quantum computing vulnerabilities, IoT security risks, and advanced social engineering techniques.', tips: ['Stay informed', 'Adopt new tech', 'Enhance training', 'Invest in R&D'] },
     'crossDomainAttackAnalysis': { q: 'What is Cross-Domain Attack Analysis?', a: 'Cross-Domain Attack Analysis involves examining security threats that span multiple domains or systems to identify vulnerabilities and mitigate risks.', tips: ['Implement segmentation', 'Monitor cross-domain traffic', 'Use threat intelligence', 'Regular audits'] },
     'zeroTrustArchitecture': { q: 'What is Zero Trust Architecture?', a: 'Zero Trust Architecture is a security model that requires strict identity verification for every person and device trying to access resources on a private network, regardless of whether they are inside or outside the network perimeter.', tips: ['Implement MFA', 'Micro-segmentation', 'Continuous monitoring', 'Least privilege access'] },    
     'aiDrivenCybersecurity': { q: 'What is AI-Driven Cybersecurity?', a: 'AI-Driven Cybersecurity leverages artificial intelligence and machine learning to detect, prevent, and respond to cyber threats more effectively and efficiently.', tips: ['Adopt AI tools', 'Train models', 'Monitor performance', 'Integrate with SIEM'] },    
     'quantumComputingImpact': { q: 'What is the impact of Quantum Computing on Cybersecurity?', a: 'Quantum Computing poses significant challenges to current cryptographic systems, potentially rendering many encryption methods obsolete and necessitating the development of quantum-resistant algorithms.', tips: ['Research quantum-safe algorithms', 'Monitor advancements', 'Update cryptography', 'Educate stakeholders'] },  
     'iotSecurityChallenges': { q: 'What are IoT Security Challenges?', a: 'IoT Security Challenges include device vulnerabilities, lack of standardization, weak authentication, and data privacy concerns, making IoT devices attractive targets for cyber attacks.', tips: ['Implement strong authentication', 'Regular updates', 'Network segmentation', 'Monitor device activity'] },  
     'advancedSocialEngineering': { q: 'What are Advanced Social Engineering Techniques?', a: 'Advanced Social Engineering Techniques involve sophisticated methods such as deepfake technology, AI-generated phishing, and multi-channel attacks to manipulate individuals into divulging sensitive information.', tips: ['Enhance training', 'Use AI detection', 'Verify communications', 'Promote awareness'] }, 
     'cloudSecurityTrends': { q: 'What are Cloud Security Trends?', a: 'Cloud Security Trends include increased adoption of multi-cloud strategies, emphasis on identity and access management, use of AI for threat detection, and focus on compliance and data privacy.', tips: ['Implement IAM', 'Monitor cloud activity', 'Use AI tools', 'Ensure compliance'] },   
     'blockchainSecurityImplications': { q: 'What are Blockchain Security Implications?', a: 'Blockchain Security Implications involve challenges such as smart contract vulnerabilities, 51% attacks, and privacy concerns, requiring robust security measures to protect blockchain networks.', tips: ['Audit smart contracts', 'Implement consensus mechanisms', 'Enhance privacy', 'Monitor network activity'] },   
     '5gCybersecurityRisks': { q: 'What are 5G Cybersecurity Risks?', a: '5G Cybersecurity Risks include increased attack surface, vulnerabilities in network slicing, and challenges in securing IoT devices connected to 5G networks.', tips: ['Implement strong encryption', 'Monitor network traffic', 'Secure IoT devices', 'Regularly update systems'] }, 
     'biometricSecurityConcerns': { q: 'What are Biometric Security Concerns?', a: 'Biometric Security Concerns include data breaches, spoofing attacks, and privacy issues related to the collection and storage of biometric data.', tips: ['Use multi-factor authentication', 'Encrypt biometric data', 'Implement liveness detection', 'Regular audits'] }, 
     'cybersecurityForRemoteWork': { q: 'What is Cybersecurity for Remote Work?', a: 'Cybersecurity for Remote Work involves implementing measures such as VPNs, endpoint security, and employee training to protect organizational data in remote work environments.', tips: ['Use VPNs', 'Secure endpoints', 'Train employees', 'Monitor access'] },  
     'digitalSupplyChainSecurity': { q: 'What is Digital Supply Chain Security?', a: 'Digital Supply Chain Security focuses on protecting the integrity and security of software and hardware components throughout the supply chain to prevent cyber attacks.', tips: ['Vet suppliers', 'Monitor components', 'Implement controls', 'Regular audits'] },   
     'cyberResilienceStrategies': { q: 'What are Cyber Resilience Strategies?', a: 'Cyber Resilience Strategies involve preparing for, responding to, and recovering from cyber attacks to ensure business continuity and minimize impact.', tips: ['Develop response plans', 'Regular backups', 'Conduct drills', 'Invest in recovery'] }, 
     'privacyEnhancingTechnologies': { q: 'What are Privacy-Enhancing Technologies (PETs)?', a: 'Privacy-Enhancing Technologies (PETs) are tools and techniques designed to protect user privacy and data security, such as encryption, anonymization, and differential privacy.', tips: ['Implement encryption', 'Use anonymization', 'Adopt differential privacy', 'Educate users'] },    
     'cyberThreatHunting': { q: 'What is Cyber Threat Hunting?', a: 'Cyber Threat Hunting is a proactive approach to identifying and mitigating cyber threats by searching through networks and systems for indicators of compromise.', tips: ['Develop hypotheses', 'Use threat intelligence', 'Analyze logs', 'Automate processes'] },    
     'DevSecOpsPractices': { q: 'What are DevSecOps Practices?', a: 'DevSecOps Practices integrate security into the DevOps process, emphasizing collaboration between development, security, and operations teams to deliver secure software.', tips: ['Shift left', 'Automate security', 'Continuous monitoring', 'Foster collaboration'] },  
     'cybersecurityAwarenessTraining': { q: 'What is Cybersecurity Awareness Training?', a: 'Cybersecurity Awareness Training educates employees about cyber threats, safe practices, and organizational policies to reduce human-related security risks.', tips: ['Regular training', 'Phishing simulations', 'Update content', 'Measure effectiveness'] },    
     'dataProtectionRegulations': { q: 'What are Data Protection Regulations?', a: 'Data Protection Regulations are laws and guidelines that govern the collection, storage, and processing of personal data to protect individual privacy.', tips: ['Understand regulations', 'Implement policies', 'Train staff', 'Conduct audits'] },    
     'cyberInsuranceImportance': { q: 'What is the Importance of Cyber Insurance?', a: 'Cyber Insurance provides financial protection against losses from cyber attacks, helping organizations recover from incidents and mitigate risks.', tips: ['Assess risks', 'Choose coverage', 'Review policies', 'Update regularly'] }, 
     'incidentResponsePlanning': { q: 'What is Incident Response Planning?', a: 'Incident Response Planning involves creating strategies and procedures to effectively respond to and manage cybersecurity incidents.', tips: ['Develop plan', 'Define roles', 'Conduct drills', 'Review regularly'] }, 
     'threatIntelligenceSharing': { q: 'What is Threat Intelligence Sharing?', a: 'Threat Intelligence Sharing involves exchanging information about cyber threats and vulnerabilities among organizations to enhance collective security.', tips: ['Join communities', 'Share responsibly', 'Use standards', 'Analyze intelligence'] },    
     'cybersecurityMetrics': { q: 'What are Cybersecurity Metrics?', a: 'Cybersecurity Metrics are quantifiable measures used to assess the effectiveness of security controls and overall cybersecurity posture.', tips: ['Define metrics', 'Collect data', 'Analyze trends', 'Report findings'] },    
     'securityOrchestrationAutomation': { q: 'What is Security Orchestration and Automation (SOAR)?', a: 'Security Orchestration and Automation (SOAR) integrates security tools and processes to automate incident response and improve efficiency.', tips: ['Identify use cases', 'Integrate tools', 'Automate workflows', 'Monitor performance'] },  
     'behavioralAnalyticsInCybersecurity': { q: 'What is Behavioral Analytics in Cybersecurity?', a: 'Behavioral Analytics in Cybersecurity uses machine learning to analyze user and entity behavior to detect anomalies and potential threats.', tips: ['Collect baseline data', 'Use ML models', 'Monitor anomalies', 'Refine algorithms'] },    
     'cyberPhysicalSystemSecurity': { q: 'What is Cyber-Physical System Security?', a: 'Cyber-Physical System Security focuses on protecting interconnected systems that integrate computing, networking, and physical processes from cyber threats.', tips: ['Implement controls', 'Monitor systems', 'Conduct risk assessments', 'Regular updates'] },    
     'industrialControlSystemSecurity': { q: 'What is Industrial Control System (ICS) Security?', a: 'Industrial Control System (ICS) Security involves protecting critical infrastructure systems from cyber attacks that could disrupt operations.', tips: ['Segment networks', 'Monitor traffic', 'Implement controls', 'Regular audits'] }, 
     'smartCityCybersecurity': { q: 'What is Smart City Cybersecurity?', a: 'Smart City Cybersecurity focuses on protecting interconnected urban systems and infrastructure from cyber threats to ensure safety and functionality.', tips: ['Implement strong security', 'Monitor systems', 'Educate citizens', 'Regular assessments'] },   
     'quantumResistantCryptography': { q: 'What is Quantum-Resistant Cryptography?', a: 'Quantum-Resistant Cryptography develops encryption methods that can withstand attacks from quantum computers, ensuring data security in the future.', tips: ['Research algorithms', 'Implement early', 'Monitor advancements', 'Educate stakeholders'] },  
     'cybersecurityInHealthcare': { q: 'What is Cybersecurity in Healthcare?', a: 'Cybersecurity in Healthcare protects sensitive patient data and medical systems from cyber threats to ensure privacy and safety.', tips: ['Implement HIPAA compliance', 'Train staff', 'Secure devices', 'Monitor access'] },    
     'cybersecurityInFinance': { q: 'What is Cybersecurity in Finance?', a: 'Cybersecurity in Finance protects financial institutions and customer data from cyber threats to ensure trust and regulatory compliance.', tips: ['Implement regulations', 'Monitor transactions', 'Train employees', 'Use advanced tools'] }, 
     'cybersecurityInEducation': { q: 'What is Cybersecurity in Education?', a: 'Cybersecurity in Education protects educational institutions and student data from cyber threats to ensure a safe learning environment.', tips: ['Implement policies', 'Train staff and students', 'Secure networks', 'Monitor activity'] },   
     'cybersecurityInGovernment': { q: 'What is Cybersecurity in Government?', a: 'Cybersecurity in Government protects sensitive government data and infrastructure from cyber threats to ensure national security and public trust.', tips: ['Implement regulations', 'Train employees', 'Secure systems', 'Monitor threats'] },  
     'cybersecurityInRetail': { q: 'What is Cybersecurity in Retail?', a: 'Cybersecurity in Retail protects customer data and payment systems from cyber threats to ensure trust and compliance with regulations.', tips: ['Implement PCI DSS', 'Secure payment systems', 'Train employees', 'Monitor transactions'] }, 
     '  cybersecurityInManufacturing': { q: 'What is Cybersecurity in Manufacturing?', a: 'Cybersecurity in Manufacturing protects industrial systems and intellectual property from cyber threats to ensure operational continuity and competitiveness.', tips: ['Implement ICS security', 'Monitor systems', 'Train staff', 'Regular audits'] },  
     '  cybersecurityInEnergy': { q: 'What is Cybersecurity in Energy?', a: 'Cybersecurity in Energy protects critical energy infrastructure and systems from cyber threats to ensure reliable and safe energy supply.', tips: ['Implement controls', 'Monitor systems', 'Train employees', 'Conduct risk assessments'] },  
     'cybersecurityInTransportation': { q: 'What is Cybersecurity in Transportation?', a: 'Cybersecurity in Transportation protects transportation systems and infrastructure from cyber threats to ensure safety and efficiency.', tips: ['Implement strong security', 'Monitor systems', 'Train staff', 'Regular assessments'] }, 
     'cybersecurityInTelecommunications': { q: 'What is Cybersecurity in Telecommunications?', a: 'Cybersecurity in Telecommunications protects communication networks and data from cyber threats to ensure reliable and secure connectivity.', tips: ['Implement strong encryption', 'Monitor network traffic', 'Train employees', 'Regular updates'] },  
     'cybersecurityInMediaAndEntertainment': { q: 'What is Cybersecurity in Media and Entertainment?', a: 'Cybersecurity in Media and Entertainment protects digital content and intellectual property from cyber threats to ensure business continuity and revenue protection.', tips: ['Implement DRM', 'Monitor content', 'Train staff', 'Regular audits'] },    
     'cybersecurityInLegal': { q: 'What is Cybersecurity in Legal?', a: 'Cybersecurity in Legal protects sensitive client data and legal documents from cyber threats to ensure confidentiality and compliance with regulations.', tips: ['Implement strong policies', 'Train staff', 'Secure communications', 'Monitor access'] }, 
     'cybersecurityInRealEstate': { q: 'What is Cybersecurity in Real Estate?', a: 'Cybersecurity in Real Estate protects property data and client information from cyber threats to ensure trust and regulatory compliance.', tips: ['Implement strong security', 'Train employees', 'Secure transactions', 'Monitor activity'] }, 
     'cybersecurityInHospitality': { q: 'What is Cybersecurity in Hospitality?', a: 'Cybersecurity in Hospitality protects guest data and reservation systems from cyber threats to ensure trust and compliance with regulations.', tips: ['Implement strong policies', 'Train staff', 'Secure payment systems', 'Monitor activity'] }, 
     'cybersecurityInAgriculture': { q: 'What is Cybersecurity in Agriculture?', a: 'Cybersecurity in Agriculture protects agricultural systems and data from cyber threats to ensure food security and operational efficiency.', tips: ['Implement strong security', 'Monitor systems', 'Train staff', 'Regular assessments'] },   
     'cybersecurityInAerospace': { q: 'What is Cybersecurity in Aerospace?', a: 'Cybersecurity in Aerospace protects aerospace systems and data from cyber threats to ensure safety and operational integrity.', tips: ['Implement strong controls', 'Monitor systems', 'Train employees', 'Conduct risk assessments'] },   
     'cybersecurityInDefense': { q: 'What is Cybersecurity in Defense?', a: 'Cybersecurity in Defense protects military systems and sensitive data from cyber threats to ensure national security and operational effectiveness.', tips: ['Implement strict controls', 'Monitor threats', 'Train personnel', 'Regular audits'] },   
     ' cybersecurityInPharmaceuticals': { q: 'What is Cybersecurity in Pharmaceuticals?', a: 'Cybersecurity in Pharmaceuticals protects sensitive research data and intellectual property from cyber threats to ensure innovation and regulatory compliance.', tips: ['Implement strong security', 'Monitor systems', 'Train staff', 'Regular audits'] },   
     'cybersecurityInAutomotive': { q: 'What is Cybersecurity in Automotive?', a: 'Cybersecurity in Automotive protects connected vehicles and automotive systems from cyber threats to ensure safety and data privacy.', tips: ['Implement strong controls', 'Monitor systems', 'Train employees', 'Conduct risk assessments'] },  
     'cybersecurityInConstruction': { q: 'What is Cybersecurity in Construction?', a: 'Cybersecurity in Construction protects project data and operational systems from cyber threats to ensure business continuity and data integrity.', tips: ['Implement strong security', 'Train staff', 'Secure communications', 'Monitor activity'] },    
     'cybersecurityInMining': { q: 'What is Cybersecurity in Mining?', a: 'Cybersecurity in Mining protects mining operations and data from cyber threats to ensure safety and operational efficiency.', tips: ['Implement strong controls', 'Monitor systems', 'Train employees', 'Conduct risk assessments'] },   
     'cybersecurityInWaterUtilities': { q: 'What is Cybersecurity in Water Utilities?', a: 'Cybersecurity in Water Utilities protects water treatment and distribution systems from cyber threats to ensure public health and safety.', tips: ['Implement strong security', 'Monitor systems', 'Train staff', 'Regular assessments'] }, 
     'cybersecurityInWasteManagement': { q: 'What is Cybersecurity in Waste Management?', a: 'Cybersecurity in Waste Management protects waste treatment and disposal systems from cyber threats to ensure environmental safety and operational efficiency.', tips: ['Implement strong controls', 'Monitor systems', 'Train employees', 'Conduct risk assessments'] },  
     ' cybersecurityInLogistics': { q: 'What is Cybersecurity in Logistics?', a: 'Cybersecurity in Logistics protects supply chain systems and data from cyber threats to ensure operational continuity and data integrity.', tips: ['Implement strong security', 'Train staff', 'Secure communications', 'Monitor activity'] },    
     'cybersecurityInRetailBanking': { q: 'What is Cybersecurity in Retail Banking?', a: 'Cybersecurity in Retail Banking protects customer data and banking systems from cyber threats to ensure trust and regulatory compliance.', tips: ['Implement strong policies', 'Train staff', 'Secure transactions', 'Monitor activity'] },   
     'cybersecurityInInvestmentBanking': { q: 'What is Cybersecurity in Investment Banking?', a: 'Cybersecurity in Investment Banking protects sensitive financial data and trading systems from cyber threats to ensure market integrity and regulatory compliance.', tips: ['Implement strong controls', 'Monitor systems', 'Train employees', 'Conduct risk assessments'] }, 
     'cybersecurityInWealthManagement': { q: 'What is Cybersecurity in Wealth Management?', a: 'Cybersecurity in Wealth Management protects client data and financial systems from cyber threats to ensure trust and regulatory compliance.', tips: ['Implement strong security', 'Train staff', 'Secure communications', 'Monitor activity'] },    
     'cybersecurityInInsurance': { q: 'What is Cybersecurity in Insurance?', a: 'Cybersecurity in Insurance protects sensitive customer data and insurance systems from cyber threats to ensure trust and regulatory compliance.', tips: ['Implement strong policies', 'Train staff', 'Secure transactions', 'Monitor activity'] }, 
     'cybersecurityInHealthcareIT': { q: 'What is Cybersecurity in Healthcare IT?', a: 'Cybersecurity in Healthcare IT protects electronic health records and medical systems from cyber threats to ensure patient privacy and safety.', tips: ['Implement HIPAA compliance', 'Train staff', 'Secure devices', 'Monitor access'] }, 
     'cybersecurityInTelemedicine': { q: 'What is Cybersecurity in Telemedicine?', a: 'Cybersecurity in Telemedicine protects virtual healthcare platforms and patient data from cyber threats to ensure privacy and regulatory compliance.', tips: ['Implement strong security', 'Train staff', 'Secure communications', 'Monitor activity'] },    
     'cybersecurityInPharmaResearch': { q: 'What is Cybersecurity in Pharma Research?', a: 'Cybersecurity in Pharma Research protects sensitive research data and intellectual property from cyber threats to ensure innovation and regulatory compliance.', tips: ['Implement strong security', 'Monitor systems', 'Train staff', 'Regular audits'] }, 
     'cybersecurityInClinicalTrials': { q: 'What is Cybersecurity in Clinical Trials?', a: 'Cybersecurity in Clinical Trials protects sensitive trial data and participant information from cyber threats to ensure data integrity and regulatory compliance.', tips: ['Implement strong controls', 'Monitor systems', 'Train employees', 'Conduct risk assessments'] },    
     'cybersecurityInMedicalDevices': { q: 'What is Cybersecurity in Medical Devices?', a: 'Cybersecurity in Medical Devices protects connected medical devices from cyber threats to ensure patient safety and data privacy.', tips: ['Implement strong security', 'Monitor devices', 'Train staff', 'Regular assessments'] }, 
     'cybersecurityInHealthInformationExchange': { q: 'What is Cybersecurity in Health Information Exchange?', a: 'Cybersecurity in Health Information Exchange protects the secure sharing of health information between organizations from cyber threats to ensure patient privacy and regulatory compliance.', tips: ['Implement strong policies', 'Train staff', 'Secure communications', 'Monitor activity'] },    
     'cybersecurityInPublicHealth': { q: 'What is Cybersecurity in Public Health?', a: 'Cybersecurity in Public Health protects public health data and systems from cyber threats to ensure effective disease surveillance and response.', tips: ['Implement strong controls', 'Monitor systems', 'Train employees', 'Conduct risk assessments'] }, 
     'cybersecurityInHealthITConsulting': { q: 'What is Cybersecurity in Health IT Consulting?', a: 'Cybersecurity in Health IT Consulting involves providing expertise to healthcare organizations to enhance their cybersecurity posture and protect sensitive data.', tips: ['Assess risks', 'Develop strategies', 'Implement solutions', 'Train staff'] },  
     'cybersecurityInHealthDataAnalytics': { q: 'What is Cybersecurity in Health Data Analytics?', a: 'Cybersecurity in Health Data Analytics protects sensitive health data used for analytics from cyber threats to ensure data integrity and patient privacy.', tips: ['Implement strong security', 'Monitor data access', 'Train staff', 'Regular audits'] },   
     'cybersecurityInHealthCloudServices': { q: 'What is Cybersecurity in Health Cloud Services?', a: 'Cybersecurity in Health Cloud Services protects cloud-based healthcare systems and data from cyber threats to ensure privacy and regulatory compliance.', tips: ['Implement strong controls', 'Monitor cloud activity', 'Train employees', 'Conduct risk assessments'] },    
     'cybersecurityInHealthMobileApps': { q: 'What is Cybersecurity in Health Mobile Apps?', a: 'Cybersecurity in Health Mobile Apps protects mobile health applications and user data from cyber threats to ensure privacy and regulatory compliance.', tips: ['Implement strong security', 'Monitor app activity', 'Train users', 'Regular updates'] },   
     'cybersecurityInHealthWearables': { q: 'What is Cybersecurity in Health Wearables?', a: 'Cybersecurity in Health Wearables protects wearable health devices and user data from cyber threats to ensure privacy and data integrity.', tips: ['Implement strong security', 'Monitor device activity', 'Train users', 'Regular updates'] },   
     'cybersecurityInHealthIoT': { q: 'What is Cybersecurity in Health IoT?', a: 'Cybersecurity in Health IoT protects Internet of Things (IoT) devices used in healthcare from cyber threats to ensure patient safety and data privacy.', tips: ['Implement strong controls', 'Monitor device activity', 'Train staff', 'Regular assessments'] },  
     'cybersecurityInHealthBlockchain': { q: 'What is Cybersecurity in Health Blockchain?', a: 'Cybersecurity in Health Blockchain protects blockchain-based healthcare systems and data from cyber threats to ensure privacy and data integrity.', tips: ['Implement strong security', 'Monitor blockchain activity', 'Train staff', 'Regular audits'] },  
     'cybersecurityInHealthAI': { q: 'What is Cybersecurity in Health AI?', a: 'Cybersecurity in Health AI protects artificial intelligence systems used in healthcare from cyber threats to ensure data integrity and patient safety.', tips: ['Implement strong controls', 'Monitor AI activity', 'Train staff', 'Conduct risk assessments'] },   
     'cybersecurityInHealthBigData': { q: 'What is Cybersecurity in Health Big Data?', a: 'Cybersecurity in Health Big Data protects large datasets used in healthcare from cyber threats to ensure data integrity and patient privacy.', tips: ['Implement strong security', 'Monitor data access', 'Train staff', 'Regular audits'] },    
     'cybersecurityInHealthTelehealth': { q: 'What is Cybersecurity in Health Telehealth?', a: 'Cybersecurity in Health Telehealth protects virtual healthcare services and patient data from cyber threats to ensure privacy and regulatory compliance.', tips: ['Implement strong security', 'Train staff', 'Secure communications', 'Monitor activity'] },   
     'cybersecurityInHealthRemoteMonitoring': { q: 'What is Cybersecurity in Health Remote Monitoring?', a: 'Cybersecurity in Health Remote Monitoring protects remote patient monitoring systems and data from cyber threats to ensure patient safety and data privacy.', tips: ['Implement strong controls', 'Monitor device activity', 'Train staff', 'Regular assessments'] },  
     'cybersecurityInHealthGenomics': { q: 'What is Cybersecurity in Health Genomics?', a: 'Cybersecurity in Health Genomics protects sensitive genomic data from cyber threats to ensure data integrity and patient privacy.', tips: ['Implement strong security', 'Monitor data access', 'Train staff', 'Regular audits'] },  
     'cybersecurityInHealthRobotics': { q: 'What is Cybersecurity in Health Robotics?', a: 'Cybersecurity in Health Robotics protects robotic systems used in healthcare from cyber threats to ensure patient safety and operational integrity.', tips: ['Implement strong controls', 'Monitor robotic systems', 'Train staff', 'Conduct risk assessments'] },  
     'cybersecurityInHealthVRAR': { q: 'What is Cybersecurity in Health VR/AR?', a: 'Cybersecurity in Health VR/AR protects virtual and augmented reality systems used in healthcare from cyber threats to ensure data integrity and patient safety.', tips: ['Implement strong security', 'Monitor system activity', 'Train staff', 'Regular updates'] },
     'cybersecurityInHealth3DPrinting': { q: 'What is Cybersecurity in Health 3D Printing?', a: 'Cybersecurity in Health 3D Printing protects 3D printing systems and designs used in healthcare from cyber threats to ensure data integrity and patient safety.', tips: ['Implement strong controls', 'Monitor printing systems', 'Train staff', 'Conduct risk assessments'] },    
     
    };

function normalizeString(str) {
    // Convert to lowercase, remove special characters, and replace spaces with empty string
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function findKnowledgeEntry(searchInput) {
    const query = (searchInput || '').toLowerCase().trim();
    if (!query) {
        return null;
    }

    const normalizedQuery = normalizeString(query);

    // First, try exact key matching with normalization
    for (const key in cyberKnowledgeBase) {
        const normalizedKey = normalizeString(key);
        if (normalizedQuery === normalizedKey || query === key.toLowerCase()) {
            return cyberKnowledgeBase[key];
        }
    }

    // Then try partial key matching
    for (const key in cyberKnowledgeBase) {
        const normalizedKey = normalizeString(key);
        if (normalizedQuery.includes(normalizedKey) || normalizedKey.includes(normalizedQuery) || 
            query.includes(key.toLowerCase()) || key.toLowerCase().includes(query)) {
            return cyberKnowledgeBase[key];
        }
    }

    // Then search in question text
    for (const key in cyberKnowledgeBase) {
        const questionText = cyberKnowledgeBase[key].q.toLowerCase();
        if (questionText.includes(query) || normalizeString(questionText).includes(normalizedQuery)) {
            return cyberKnowledgeBase[key];
        }
    }

    // Finally search in answer text
    for (const key in cyberKnowledgeBase) {
        const answerText = cyberKnowledgeBase[key].a.toLowerCase();
        if (answerText.includes(query) || normalizeString(answerText).includes(normalizedQuery)) {
            return cyberKnowledgeBase[key];
        }
    }

    return null;
}

function buildTipsList(tips) {
    if (!tips || !tips.length) {
        return '';
    }

    let tipsHTML = '<h4 style="color: var(--green); margin-bottom: 0.5rem;">💡 Tips:</h4><ul style="list-style-position: inside;">';
    tips.forEach(tip => {
        tipsHTML += `<li style="color: var(--text-muted);">✓ ${tip}</li>`;
    });
    tipsHTML += '</ul>';
    return tipsHTML;
}

function searchCyberKnowledge() {
    const inputEl = document.getElementById('cyberSearchInput');
    const searchInput = inputEl ? inputEl.value.trim() : '';
    const resultsDiv = document.getElementById('searchResults');
    const hintsDiv = document.getElementById('searchHints');

    if (!searchInput) {
        if (resultsDiv) {
            resultsDiv.style.display = 'none';
        }
        if (hintsDiv) {
            hintsDiv.style.display = 'block';
        }
        return;
    }

    window.location.href = `search.html?q=${encodeURIComponent(searchInput)}`;
}

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && document.getElementById('cyberSearchInput')) {
        searchCyberKnowledge();
    }
});

function renderSearchPageResult(query) {
    const trimmedQuery = (query || '').trim();
    const resultsContainer = document.getElementById('searchPageResults');
    const noResultContainer = document.getElementById('searchPageNoResult');
    const introText = document.getElementById('searchPageIntro');
    const questionEl = document.getElementById('searchPageQuestion');
    const answerEl = document.getElementById('searchPageAnswer');
    const tipsEl = document.getElementById('searchPageTips');
    const queryLabel = document.getElementById('searchQueryText');

    if (!resultsContainer) {
        return;
    }

    if (queryLabel) {
        queryLabel.textContent = trimmedQuery || '...';
    }

    if (!trimmedQuery) {
        resultsContainer.style.display = 'none';
        if (noResultContainer) {
            noResultContainer.style.display = 'none';
        }
        if (introText) {
            introText.style.display = 'block';
        }
        return;
    }

    if (introText) {
        introText.style.display = 'none';
    }

    const match = findKnowledgeEntry(trimmedQuery);

    if (match) {
        resultsContainer.style.display = 'block';
        if (noResultContainer) {
            noResultContainer.style.display = 'none';
        }
        if (questionEl) {
            questionEl.textContent = match.q;
        }
        if (answerEl) {
            answerEl.textContent = match.a;
        }
        if (tipsEl) {
            tipsEl.innerHTML = buildTipsList(match.tips);
        }
    } else {
        resultsContainer.style.display = 'none';
        if (questionEl) {
            questionEl.textContent = '';
        }
        if (answerEl) {
            answerEl.textContent = '';
        }
        if (tipsEl) {
            tipsEl.innerHTML = '';
        }
        if (noResultContainer) {
            noResultContainer.style.display = 'block';
            noResultContainer.textContent = `No results found for "${trimmedQuery}". Try another cybersecurity keyword.`;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.body.classList.contains('search-page')) {
        const params = new URLSearchParams(window.location.search);
        const query = params.get('q') || '';
        const inputEl = document.getElementById('cyberSearchInput');
        if (inputEl) {
            inputEl.value = query;
        }
        renderSearchPageResult(query);
    }
});

const cyberAssistantHygieneLibrary = [
    'Update operating systems, browsers, and firmware every week',
    'Enable multi-factor authentication everywhere possible',
    'Use a password manager with unique passphrases per account',
    'Back up critical files using the 3-2-1 strategy',
    'Review account activity logs and revoke unused access regularly',
    'Segment home and work networks with separate WiFi profiles',
    'Run endpoint protection and auto scans on every device'
];

const cyberAssistantFallbackDefense = [
    'Verify unexpected messages and report suspicious requests immediately',
    'Enable password managers, MFA, and least-privilege access',
    'Patch operating systems, browsers, and critical applications quickly',
    'Maintain offline backups and monitor for unusual account activity'
];

const cyberNewsEndpoint = 'https://hn.algolia.com/api/v1/search?query=cybersecurity&tags=story&hitsPerPage=10';

const attackPathLibrary = {
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

const behaviorScenarioLibrary = {
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

function initCyberAssistant() {
    const form = document.getElementById('assistantForm');
    const input = document.getElementById('assistantInput');
    const messages = document.getElementById('assistantMessages');
    if (!form || !input || !messages) {
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        handleAssistantQuery();
    });

    const suggestionButtons = document.querySelectorAll('[data-assistant-query]');
    suggestionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const query = this.getAttribute('data-assistant-query') || '';
            handleAssistantQuery(query);
        });
    });

    appendAssistantMessage({
        title: 'Cyber Assistant Online',
        meaning: 'Ask me about any cyber attack, tactic, or best practice and I will break it into threat meaning, defenses, and hygiene tips.',
        defenses: [
            'Request an attack breakdown',
            'Ask for a defense playbook',
            'Get rotating hygiene reminders'
        ],
        hygiene: getCyberHygieneChecklist()
    });
}

function handleAssistantQuery(forcedQuery) {
    const input = document.getElementById('assistantInput');
    if (!input) {
        return;
    }
    const rawPrompt = typeof forcedQuery === 'string' && forcedQuery.length ? forcedQuery : input.value;
    const query = rawPrompt.trim();
    if (!query) {
        return;
    }
    appendUserMessage(query);
    input.value = '';
    const response = buildAssistantResponse(query);
    appendAssistantMessage(response);
}

function appendUserMessage(text) {
    const container = document.getElementById('assistantMessages');
    if (!container) {
        return;
    }
    const message = document.createElement('div');
    message.className = 'message user';
    message.textContent = text;
    container.appendChild(message);
    container.scrollTop = container.scrollHeight;
}

function appendAssistantMessage(payload) {
    const container = document.getElementById('assistantMessages');
    if (!container) {
        return;
    }
    const message = document.createElement('div');
    message.className = 'message assistant';

    const title = document.createElement('div');
    title.className = 'assistant-title';
    title.textContent = payload.title || 'Cybersecurity Guidance';
    message.appendChild(title);

    const sections = document.createElement('div');
    sections.className = 'assistant-sections';
    sections.appendChild(createAssistantSection('What it means', payload.meaning));
    sections.appendChild(createAssistantSection('Protection plan', payload.defenses));
    sections.appendChild(createAssistantSection('Cyber hygiene', payload.hygiene));
    message.appendChild(sections);

    container.appendChild(message);
    container.scrollTop = container.scrollHeight;
}

function createAssistantSection(label, content) {
    const section = document.createElement('div');
    section.className = 'assistant-section';
    const heading = document.createElement('div');
    heading.className = 'assistant-section-label';
    heading.textContent = label;
    section.appendChild(heading);

    if (Array.isArray(content)) {
        const list = document.createElement('ul');
        list.className = 'assistant-list';
        content.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
        section.appendChild(list);
    } else if (content) {
        const paragraph = document.createElement('p');
        paragraph.textContent = content;
        section.appendChild(paragraph);
    }

    return section;
}

function buildAssistantResponse(query) {
    const match = findKnowledgeEntry(query);
    if (match) {
        return {
            title: match.q,
            meaning: match.a,
            defenses: match.tips && match.tips.length ? match.tips : cyberAssistantFallbackDefense,
            hygiene: getCyberHygieneChecklist()
        };
    }

    return {
        title: `Let's explore ${query}`,
        meaning: `I could not find a direct match for "${query}". Try naming the attack, platform, or technique while following the guidance below.`,
        defenses: cyberAssistantFallbackDefense,
        hygiene: getCyberHygieneChecklist()
    };
}

function getCyberHygieneChecklist() {
    const pool = [...cyberAssistantHygieneLibrary];
    const checklist = [];
    while (pool.length && checklist.length < 4) {
        const index = Math.floor(Math.random() * pool.length);
        checklist.push(pool.splice(index, 1)[0]);
    }
    return checklist;
}

function initCyberNews() {
    const refreshButton = document.getElementById('cyberNewsRefresh');
    if (!refreshButton) {
        return;
    }
    refreshButton.addEventListener('click', fetchCyberNews);
    fetchCyberNews();
}

async function fetchCyberNews() {
    const list = document.getElementById('cyberNewsList');
    const status = document.getElementById('cyberNewsStatus');
    const source = document.getElementById('cyberNewsSource');
    const refreshButton = document.getElementById('cyberNewsRefresh');
    if (!list || !status) {
        return;
    }
    list.innerHTML = '';
    status.textContent = 'Syncing live feed...';
    if (refreshButton) {
        refreshButton.disabled = true;
    }
    try {
        const response = await fetch(cyberNewsEndpoint);
        if (!response.ok) {
            throw new Error('Network response error');
        }
        const payload = await response.json();
        const hits = Array.isArray(payload.hits) ? payload.hits.filter(hit => hit && hit.title).slice(0, 6) : [];
        if (!hits.length) {
            status.textContent = 'No cyber headlines detected. Try again soon.';
            if (source) {
                source.textContent = 'Source: Hacker News API (Cybersecurity query)';
            }
            return;
        }
        hits.forEach((hit, index) => {
            list.appendChild(buildNewsCard(hit, index));
        });
        status.textContent = `Updated ${new Date().toLocaleTimeString()}`;
        if (source) {
            source.textContent = 'Source: Hacker News API (Cybersecurity query)';
        }
    } catch (error) {
        status.textContent = 'Unable to load headlines. Check your connection.';
    } finally {
        if (refreshButton) {
            refreshButton.disabled = false;
        }
    }
}

function buildNewsCard(hit, index) {
    const article = document.createElement('article');
    article.className = 'news-card';

    const rank = document.createElement('div');
    rank.className = 'news-rank';
    rank.textContent = `#${index + 1}`;
    article.appendChild(rank);

    const content = document.createElement('div');
    content.className = 'news-content';

    const title = document.createElement('h4');
    title.textContent = hit.title || 'Cybersecurity Headline';
    content.appendChild(title);

    const description = document.createElement('p');
    description.textContent = hit.story_text ? hit.story_text.substring(0, 160) + '…' : 'Tap the headline to explore the full story.';
    content.appendChild(description);

    const meta = document.createElement('div');
    meta.className = 'news-meta';

    const author = document.createElement('span');
    author.textContent = hit.author ? `By ${hit.author}` : 'Unknown author';
    meta.appendChild(author);

    const domain = document.createElement('span');
    domain.textContent = formatNewsDomain(hit.url);
    meta.appendChild(domain);

    content.appendChild(meta);

    if (hit.url) {
        const link = document.createElement('a');
        link.href = hit.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Open story →';
        link.style.display = 'inline-block';
        link.style.marginTop = '0.7rem';
        link.style.color = 'var(--cyan)';
        content.appendChild(link);
    }

    article.appendChild(content);
    return article;
}

function formatNewsDomain(url) {
    if (!url) {
        return 'Direct source';
    }
    try {
        const hostname = new URL(url).hostname.replace('www.', '');
        return hostname;
    } catch (error) {
        return 'External source';
    }
}

function initAttackMapper() {
    const chips = document.querySelectorAll('.attack-chip');
    const defaultChip = chips.length ? chips[0] : null;
    if (!defaultChip) {
        return;
    }
    chips.forEach(chip => {
        chip.addEventListener('click', function() {
            chips.forEach(button => button.classList.remove('active'));
            this.classList.add('active');
            renderAttackPath(this.getAttribute('data-attack'));
        });
    });
    renderAttackPath(defaultChip.getAttribute('data-attack'));
}

function renderAttackPath(key) {
    const data = attackPathLibrary[key];
    const flow = document.getElementById('attackFlow');
    const title = document.getElementById('attackTitle');
    const description = document.getElementById('attackDescription');
    const defenses = document.getElementById('attackDefenseList');
    if (!data || !flow || !title || !description || !defenses) {
        return;
    }
    flow.innerHTML = '';
    data.path.forEach((step, index) => {
        const node = document.createElement('div');
        node.className = 'attack-node';

        const badge = document.createElement('div');
        badge.className = 'attack-node-index';
        badge.textContent = index + 1;
        node.appendChild(badge);

        const heading = document.createElement('h4');
        heading.textContent = step.stage;
        node.appendChild(heading);

        const detail = document.createElement('p');
        detail.textContent = step.detail;
        node.appendChild(detail);

        flow.appendChild(node);

        if (index < data.path.length - 1) {
            const connector = document.createElement('div');
            connector.className = 'attack-connector';
            flow.appendChild(connector);
        }
    });

    title.textContent = data.title;
    description.textContent = data.description;
    defenses.innerHTML = '';
    data.defenses.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        defenses.appendChild(li);
    });
}

function initBehaviorSimulator() {
    const chips = document.querySelectorAll('.behavior-chip');
    const defaultChip = chips.length ? chips[0] : null;
    if (!defaultChip) {
        return;
    }
    chips.forEach(chip => {
        chip.addEventListener('click', function() {
            chips.forEach(button => button.classList.remove('active'));
            this.classList.add('active');
            renderBehaviorScenario(this.getAttribute('data-scenario'));
        });
    });
    renderBehaviorScenario(defaultChip.getAttribute('data-scenario'));
}

function renderBehaviorScenario(key) {
    const data = behaviorScenarioLibrary[key];
    const title = document.getElementById('behaviorScenarioTitle');
    const description = document.getElementById('behaviorScenarioDesc');
    const rightAction = document.getElementById('behaviorRightAction');
    const wrongAction = document.getElementById('behaviorWrongAction');
    const outcome = document.getElementById('behaviorOutcome');
    const safeList = document.getElementById('behaviorSafePlan');
    if (!data || !title || !description || !rightAction || !wrongAction || !outcome || !safeList) {
        return;
    }
    title.textContent = data.title;
    description.textContent = data.description;
    rightAction.textContent = data.rightAction;
    wrongAction.textContent = data.wrongAction;
    outcome.textContent = data.outcome;
    safeList.innerHTML = '';
    data.staySafe.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        safeList.appendChild(li);
    });
}

function toggleAccordion(element) {
    const accordion = element.parentElement;
    const content = accordion.querySelector('.accordion-content');
    if (accordion.classList.contains('active')) {
        accordion.classList.remove('active');
        content.style.maxHeight = '0';
    } else {
        accordion.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}

function checkPasswordStrength() {
    const password = document.getElementById('passwordInput').value;
    const strengthResult = document.getElementById('strengthResult');
    const strengthBar = document.getElementById('strengthBar');
    const feedback = document.getElementById('passwordFeedback');
    
    let strength = 0;
    let feedback_text = '';
    
    if (password.length === 0) {
        strengthResult.innerHTML = '';
        strengthBar.style.width = '0%';
        feedback.innerHTML = '';
        return;
    }
    
    if (password.length >= 8) strength += 20;
    if (password.length >= 12) strength += 10;
    if (password.length >= 16) strength += 10;
    
    if (/[a-z]/.test(password)) strength += 15;
    if (/[A-Z]/.test(password)) strength += 15;
    if (/[0-9]/.test(password)) strength += 15;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 15;
    
    strength = Math.min(strength, 100);
    
    let strengthLevel = '';
    let strengthColor = '';
    
    if (strength < 30) {
        strengthLevel = '🔴 Very Weak';
        strengthColor = '#FF6B00';
        feedback_text = '❌ Add uppercase, numbers, and symbols';
    } else if (strength < 50) {
        strengthLevel = '🟡 Weak';
        strengthColor = '#FFC100';
        feedback_text = '⚠️ Add more variety (mix case, numbers, symbols)';
    } else if (strength < 70) {
        strengthLevel = '🟢 Fair';
        strengthColor = '#FFC100';
        feedback_text = '✓ Good, but could be stronger';
    } else if (strength < 90) {
        strengthLevel = '🟢 Strong';
        strengthColor = '#00FF88';
        feedback_text = '✓ Good password strength!';
    } else {
        strengthLevel = '💪 Very Strong';
        strengthColor = '#00E5FF';
        feedback_text = '✓ Excellent! Very secure password.';
    }
    
    strengthResult.innerHTML = `<div style="color: ${strengthColor}; font-weight: 600;">${strengthLevel}</div>`;
    strengthBar.style.width = strength + '%';
    strengthBar.style.backgroundColor = strengthColor;
    feedback.innerHTML = feedback_text;
}

async function generateHash() {
    const input = document.getElementById('hashInput').value;
    const output = document.getElementById('hashOutput');
    
    if (!input) {
        output.innerHTML = 'Hash will appear here';
        return;
    }
    
    try {
        const buffer = new TextEncoder().encode(input);
        const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        output.innerHTML = hashHex;
    } catch (e) {
        output.innerHTML = 'SHA-256 not supported in your browser';
    }
}

function encodeBase64() {
    const input = document.getElementById('base64Input').value;
    const output = document.getElementById('base64Output');
    
    if (!input) {
        output.innerHTML = 'Encoded result will appear here';
        return;
    }
    
    try {
        const encoded = btoa(unescape(encodeURIComponent(input)));
        output.innerHTML = encoded;
    } catch (e) {
        output.innerHTML = 'Error encoding';
    }
}

function decodeBase64() {
    const input = document.getElementById('base64Input').value;
    const output = document.getElementById('base64Output');
    
    if (!input) {
        output.innerHTML = 'Decoded result will appear here';
        return;
    }
    
    try {
        const decoded = decodeURIComponent(escape(atob(input)));
        output.innerHTML = decoded;
    } catch (e) {
        output.innerHTML = 'Invalid Base64 input';
    }
}

function simulateBreachCheck() {
    const email = document.getElementById('breachEmail').value;
    const result = document.getElementById('breachResult');
    
    if (!email) {
        result.innerHTML = '';
        return;
    }
    
    if (!email.includes('@')) {
        result.innerHTML = '<div style="color: #FF6B00;">⚠️ Enter a valid email</div>';
        return;
    }
    
    const breachedDomains = ['example.com', 'oldcompany.com', 'freemail.net'];
    const emailDomain = email.split('@')[1].toLowerCase();
    
    if (breachedDomains.includes(emailDomain)) {
        result.innerHTML = '<div style="color: #FF6B00;">⚠️ This domain has appeared in known breaches. Change your password and enable 2FA.</div>';
    } else {
        result.innerHTML = '<div style="color: #00FF88;">✓ No matches found in known breaches (simulated)</div>';
    }
}

function copyToClipboard(elementId) {
    try {
        const element = document.getElementById(elementId);
        if (!element) {
            console.error('Element not found:', elementId);
            alert('Error: Could not find element to copy from');
            return;
        }

        const text = element.innerText || element.textContent;

        if (!text || text.trim() === '') {
            alert('No text to copy');
            return;
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                alert('Copied to clipboard!');
            }).catch((err) => {
                console.warn('Clipboard API failed, using fallback:', err);
                fallbackCopy(text);
            });
        } else {
            fallbackCopy(text);
        }
    } catch (e) {
        console.error('Error copying to clipboard:', e);
        alert('Error copying to clipboard. Please try again.');
    }
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Copied to clipboard!');
}

function generateGUID() {
    const guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
    
    document.getElementById('guidOutput').innerHTML = guid;
}

function convertColor() {
    const input = document.getElementById('hexInput').value.trim();
    const output = document.getElementById('colorOutput');
    const preview = document.getElementById('colorPreview');
    
    if (!input) {
        output.innerHTML = 'Converted color will appear here';
        return;
    }
    
    let hexColor = '';
    
    if (input.startsWith('#')) {
        if (/^#[0-9A-F]{6}$/i.test(input)) {
            hexColor = input;
            const rgb = hexToRgb(input);
            output.innerHTML = `<strong>Hex:</strong> ${input}<br><strong>RGB:</strong> rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        }
    } else if (input.match(/^rgb\(\d+,\s*\d+,\s*\d+\)$/)) {
        const rgb = input.match(/\d+/g);
        hexColor = rgbToHex(parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]));
        output.innerHTML = `<strong>RGB:</strong> ${input}<br><strong>Hex:</strong> ${hexColor}`;
    } else {
        output.innerHTML = 'Invalid color format. Use #RRGGBB or rgb(r,g,b)';
        return;
    }
    
    preview.style.backgroundColor = hexColor;
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('').toUpperCase();
}

function convertTimestamp() {
    const input = document.getElementById('timestampInput').value;
    const output = document.getElementById('timestampOutput');
    
    if (!input) {
        output.innerHTML = 'Conversion will appear here';
        return;
    }
    
    const timestamp = parseInt(input);
    
    if (isNaN(timestamp)) {
        output.innerHTML = 'Invalid timestamp';
        return;
    }
    
    const date = new Date(timestamp * 1000);
    output.innerHTML = `<strong>Timestamp:</strong> ${timestamp}<br><strong>Date:</strong> ${date.toLocaleString()}`;
}

function getCurrentTimestamp() {
    const timestamp = Math.floor(Date.now() / 1000);
    document.getElementById('timestampInput').value = timestamp;
    convertTimestamp();
}

function validateJSON() {
    const input = document.getElementById('jsonInput').value;
    const result = document.getElementById('jsonResult');

    if (!input.trim()) {
        result.innerHTML = '';
        return;
    }

    try {
        JSON.parse(input);
        result.innerHTML = '<div style="color: #00FF88; margin-top: 1rem;">✓ Valid JSON</div>';
    } catch (e) {
        result.innerHTML = `<div style="color: #FF6B00; margin-top: 1rem;">✗ Invalid JSON: ${e.message}</div>`;
    }
}

function simulateSSLCheck() {
    const input = document.getElementById('sslInput').value.trim();
    const result = document.getElementById('sslResult');

    const domain = input || 'google.com';

    // Simulate SSL check results
    const simulatedResults = {
        'google.com': {
            status: '✓ Valid SSL Certificate',
            details: 'Certificate Authority: Google Trust Services<br>Expires: 45 days from now<br>Protocol: TLS 1.3<br>Key Size: 2048-bit RSA'
        },
        'example.com': {
            status: '✓ Valid SSL Certificate',
            details: 'Certificate Authority: Let\'s Encrypt<br>Expires: 30 days from now<br>Protocol: TLS 1.2<br>Key Size: 2048-bit RSA'
        },
        'badssl.com': {
            status: '✗ Certificate Issues Detected',
            details: 'Certificate Authority: Unknown<br>Expires: Expired 5 days ago<br>Protocol: TLS 1.0 (deprecated)<br>Key Size: 1024-bit RSA'
        }
    };

    const data = simulatedResults[domain] || {
        status: '✓ Valid SSL Certificate (Simulated)',
        details: 'Certificate Authority: Simulated CA<br>Expires: 60 days from now<br>Protocol: TLS 1.3<br>Key Size: 2048-bit RSA'
    };

    result.innerHTML = `
        <strong>🔍 SSL Check Results for ${domain}:</strong><br>
        <span style="color: ${data.status.includes('✓') ? '#00FF88' : '#FF6B00'};">${data.status}</span><br><br>
        ${data.details}<br><br>
        <em style="font-size: 0.85rem;">This is a simulation. For real SSL checking, use: ssllabs.com, crt.sh, or your browser's certificate viewer</em>
    `;
}

function simulatePQC() {
    const algorithm = document.getElementById('pqcAlgorithm').value;
    const resultsDiv = document.getElementById('pqcResults');
    
    const algorithms = {
        kyber: {
            name: 'Kyber',
            type: 'Key Encapsulation Mechanism (KEM)',
            security: 'NIST Level 3 (AES-192 equivalent)',
            keySize: '1568 bytes (public key)',
            description: 'Lattice-based cryptography using Module Learning With Errors (Module-LWE)'
        },
        dilithium: {
            name: 'Dilithium',
            type: 'Digital Signature Algorithm',
            security: 'NIST Level 3 (AES-192 equivalent)',
            keySize: '1952 bytes (public key)',
            description: 'Lattice-based signatures using CRYSTALS framework'
        },
        falcon: {
            name: 'FALCON',
            type: 'Digital Signature Algorithm',
            security: 'NIST Level 5 (AES-256 equivalent)',
            keySize: '897 bytes (public key)',
            description: 'Fast Fourier lattice-based compact signatures'
        },
        sphincs: {
            name: 'SPHINCS+',
            type: 'Digital Signature Algorithm',
            security: 'NIST Level 3-5',
            keySize: '32-64 bytes (public key)',
            description: 'Hash-based signatures, stateless and quantum-resistant'
        }
    };
    
    const algo = algorithms[algorithm];
    const simulatedTime = (Math.random() * 5 + 2).toFixed(2);
    
    resultsDiv.style.display = 'block';
    resultsDiv.innerHTML = `
        <div style="background: rgba(157, 78, 221, 0.1); border: 2px solid #9D4EDD; border-radius: 10px; padding: 1.5rem;">
            <h4 style="color: #9D4EDD; margin-top: 0;">🔐 ${algo.name} Encryption Simulation</h4>
            <div style="margin: 1rem 0;">
                <strong>Algorithm Type:</strong> ${algo.type}<br>
                <strong>Security Level:</strong> ${algo.security}<br>
                <strong>Key Size:</strong> ${algo.keySize}<br>
                <strong>Description:</strong> ${algo.description}
            </div>
            <div style="background: rgba(0, 0, 0, 0.3); padding: 1rem; border-radius: 8px; margin: 1rem 0; font-family: monospace; font-size: 0.85rem;">
                <div style="color: #00FF88;">✓ Generating key pair...</div>
                <div style="color: #00FF88;">✓ Encrypting message with ${algo.name}...</div>
                <div style="color: #00FF88;">✓ Encryption completed in ${simulatedTime}ms</div>
                <div style="margin-top: 0.5rem; color: #00E5FF;">Encrypted Output: ${generateRandomHex(64)}</div>
            </div>
            <div style="padding: 1rem; background: rgba(0, 229, 255, 0.1); border-radius: 8px; border-left: 3px solid #00E5FF;">
                <strong style="color: #00E5FF;">Why Post-Quantum?</strong><br>
                <span style="font-size: 0.9rem;">Traditional RSA and ECC algorithms can be broken by quantum computers using Shor's algorithm. ${algo.name} is designed to resist quantum attacks, ensuring long-term security.</span>
            </div>
        </div>
    `;
}

function comparePQC() {
    const resultsDiv = document.getElementById('pqcResults');
    
    resultsDiv.style.display = 'block';
    resultsDiv.innerHTML = `
        <div style="background: rgba(157, 78, 221, 0.1); border: 2px solid #9D4EDD; border-radius: 10px; padding: 1.5rem;">
            <h4 style="color: #9D4EDD; margin-top: 0;">⚖️ PQC vs Traditional Cryptography</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
                <thead>
                    <tr style="background: rgba(157, 78, 221, 0.2);">
                        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #9D4EDD;">Feature</th>
                        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #9D4EDD;">RSA/ECC</th>
                        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #9D4EDD;">Post-Quantum</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background: rgba(0, 0, 0, 0.2);">
                        <td style="padding: 10px;"><strong>Quantum Resistance</strong></td>
                        <td style="padding: 10px; color: #FF6B00;">❌ Vulnerable</td>
                        <td style="padding: 10px; color: #00FF88;">✅ Resistant</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;"><strong>Key Size</strong></td>
                        <td style="padding: 10px;">2048-4096 bits</td>
                        <td style="padding: 10px;">1000-8000+ bytes</td>
                    </tr>
                    <tr style="background: rgba(0, 0, 0, 0.2);">
                        <td style="padding: 10px;"><strong>Performance</strong></td>
                        <td style="padding: 10px;">Fast (mature)</td>
                        <td style="padding: 10px;">Moderate (improving)</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;"><strong>Mathematical Basis</strong></td>
                        <td style="padding: 10px;">Factoring, Discrete Log</td>
                        <td style="padding: 10px;">Lattices, Hashes</td>
                    </tr>
                    <tr style="background: rgba(0, 0, 0, 0.2);">
                        <td style="padding: 10px;"><strong>Standardization</strong></td>
                        <td style="padding: 10px;">Established (NIST)</td>
                        <td style="padding: 10px;">In Progress (NIST)</td>
                    </tr>
                </tbody>
            </table>
            <div style="margin-top: 1rem; padding: 1rem; background: rgba(255, 193, 0, 0.1); border-radius: 8px; border-left: 3px solid #FFC100;">
                <strong style="color: #FFC100;">⚠️ Migration Timeline:</strong><br>
                <span style="font-size: 0.9rem;">Experts estimate quantum computers capable of breaking RSA/ECC could emerge within 10-20 years. Organizations should begin transitioning to post-quantum cryptography now to ensure "harvest now, decrypt later" attacks are prevented.</span>
            </div>
        </div>
    `;
}

function generateRandomHex(length) {
    let result = '';
    const characters = '0123456789abcdef';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

document.addEventListener('DOMContentLoaded', function() {
    const pqcAlgorithm = document.getElementById('pqcAlgorithm');
    if (pqcAlgorithm) {
        pqcAlgorithm.addEventListener('change', function() {
            const descriptions = {
                kyber: 'Kyber uses lattice-based cryptography with Module Learning With Errors (Module-LWE) problem. Selected by NIST for standardization. Excellent balance of security, key size, and performance.',
                dilithium: 'Dilithium is a lattice-based signature scheme from the CRYSTALS suite. Provides strong security guarantees with reasonable signature and key sizes. NIST selected for standardization.',
                falcon: 'FALCON uses Fast Fourier lattice-based signatures with very compact signatures and keys. Provides high security level (NIST Level 5) with excellent efficiency.',
                sphincs: 'SPHINCS+ is a stateless hash-based signature scheme. Conservative choice with minimal security assumptions, resistant to all known quantum attacks. Larger signatures but excellent long-term security.'
            };
            
            document.getElementById('pqcDescription').textContent = descriptions[this.value];
        });
    }
});

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file + "?t=" + new Date().getTime(), true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

// PWA Service Worker Registration
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('[PWA] Service Worker registered successfully:', registration.scope);

                    // Check for updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                console.log('[PWA] New service worker available');
                            }
                        });
                    });
                })
                .catch((error) => {
                    // Fail silently - PWA features are optional
                    console.warn('[PWA] Service Worker not available:', error.message);
                });
        });
    }
}



// Listen for service worker messages
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SYNC_COMPLETE') {
            console.log('[PWA] Sync completed:', event.data.message);
            // Could show a toast notification here
        }
    });

    // PWA install prompt disabled
}

document.addEventListener('DOMContentLoaded', function() {
    includeHTML();
    registerServiceWorker();

    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(header => {
        header.addEventListener('click', function() {
            toggleAccordion(this);
        });
    });

    initThemeToggle();
    initCyberAssistant();
    initCyberNews();
    initAttackMapper();
    initBehaviorSimulator();
    initChecklist();
    initPhishingLab();
});

// Local Storage Utilities
function saveToStorage(key, value) {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
        return true;
    } catch (e) {
        console.error('Error saving to localStorage:', e);
        return false;
    }
}

function loadFromStorage(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key);
        if (item === null) return defaultValue;
        return JSON.parse(item);
    } catch (e) {
        console.error('Error loading from localStorage:', e);
        return defaultValue;
    }
}

function saveUserProgress(progressData) {
    const existingProgress = loadFromStorage('userProgress', {});
    const updatedProgress = { ...existingProgress, ...progressData, lastUpdated: new Date().toISOString() };
    return saveToStorage('userProgress', updatedProgress);
}

function loadUserProgress() {
    return loadFromStorage('userProgress', {});
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Load saved theme
    const savedTheme = loadFromStorage('theme', 'dark');
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        saveToStorage('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
        themeToggle.title = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
    }
}

// Cyber Hygiene Checklist Functionality
function initChecklist() {
    const checkboxes = document.querySelectorAll('#learning.html .checklist-item input[type="checkbox"]');
    const certificateSection = document.getElementById('certificateSection');
    const generateCertificateBtn = document.getElementById('generateCertificate');

    if (!checkboxes.length || !certificateSection || !generateCertificateBtn) return;

    function checkCompletion() {
        const total = checkboxes.length;
        const checked = document.querySelectorAll('#learning.html .checklist-item input[type="checkbox"]:checked').length;
        const isComplete = checked === total;

        if (isComplete) {
            certificateSection.style.display = 'block';
        } else {
            certificateSection.style.display = 'none';
        }
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', checkCompletion);
    });

    generateCertificateBtn.addEventListener('click', generateCertificate);
    checkCompletion(); // Initial check
}

function generateCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Certificate styling
    doc.setFontSize(24);
    doc.setTextColor(0, 229, 255); // Cyan color
    doc.text('CyberGuard Certificate', 105, 40, { align: 'center' });

    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('Cyber Hygiene Excellence', 105, 60, { align: 'center' });

    doc.setFontSize(12);
    doc.text('This certifies that', 105, 80, { align: 'center' });

    doc.setFontSize(18);
    doc.setTextColor(0, 255, 136); // Green
    doc.text('Cyber Security Enthusiast', 105, 100, { align: 'center' });

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text('has successfully completed the Personal Cyber Hygiene Checklist', 105, 120, { align: 'center' });
    doc.text('and demonstrated commitment to cybersecurity best practices.', 105, 135, { align: 'center' });

    doc.text(`Date: ${new Date().toLocaleDateString()}`, 105, 155, { align: 'center' });

    // Add some decorative elements
    doc.setDrawColor(0, 229, 255);
    doc.setLineWidth(2);
    doc.rect(20, 20, 170, 160);

    doc.setDrawColor(0, 255, 136);
    doc.setLineWidth(1);
    doc.rect(25, 25, 160, 150);

    // Save the PDF
    doc.save('CyberGuard_Certificate.pdf');
}

// Phishing Detective Lab Functionality
const phishingScenarios = [
    {
        subject: 'Urgent: Account Security Alert',
        sender: 'security@bankofamerica-support.com',
        time: '2 minutes ago',
        body: 'Dear valued customer,\n\nWe have detected unusual activity on your account. To prevent unauthorized access, please verify your identity immediately by clicking the link below.\n\n[Verify Account Now]\n\nIf you do not verify within 24 hours, your account will be temporarily suspended.\n\nBest regards,\nBank of America Security Team',
        isPhishing: true,
        explanation: 'This is phishing! Red flags: Urgent language, suspicious sender domain, generic greeting, and pressure to click immediately.'
    },
    {
        subject: 'Your Amazon Order Confirmation',
        sender: 'orders@amazon.com',
        time: '1 hour ago',
        body: 'Hello,\n\nThank you for your recent purchase. Your order #123-4567890-1234567 has been confirmed and is being processed.\n\nOrder Details:\n- Wireless Mouse: $24.99\n- Shipping: Free\n\nEstimated delivery: Tomorrow by 8 PM\n\nTrack your order: [Track Package]\n\nThank you for shopping with Amazon!',
        isPhishing: false,
        explanation: 'This appears legitimate. It has proper sender domain, no urgent language, and provides specific order details.'
    },
    {
        subject: 'Microsoft Account Password Reset',
        sender: 'account-security@microsoft.com',
        time: '30 minutes ago',
        body: 'Hi there,\n\nWe noticed a sign-in attempt from an unrecognized device. If this was you, no action is needed.\n\nIf you did not attempt to sign in, please reset your password immediately:\n\n[Reset Password]\n\nFor your security, we recommend enabling two-factor authentication.\n\nMicrosoft Account Team',
        isPhishing: true,
        explanation: 'Phishing attempt! Microsoft never asks you to reset passwords via email links. Always go directly to the official website.'
    },
    {
        subject: 'Weekly Newsletter: Cybersecurity Tips',
        sender: 'newsletter@cyberguard.com',
        time: '3 hours ago',
        body: 'Hello Security Enthusiast,\n\nHere are this week\'s top cybersecurity tips:\n\n1. Always use strong, unique passwords\n2. Enable two-factor authentication\n3. Keep your software updated\n4. Be cautious with email attachments\n5. Use antivirus software\n\nStay safe online!\n\nThe CyberGuard Team',
        isPhishing: false,
        explanation: 'This is a legitimate newsletter. It comes from the official domain and contains helpful, non-urgent information.'
    },
    {
        subject: 'Your PayPal Payment Receipt',
        sender: 'service@paypal-security.com',
        time: '45 minutes ago',
        body: 'Dear PayPal User,\n\nA payment of $499.99 has been processed from your account. If this was not you, please secure your account now.\n\n[Review Transaction]\n\nPayPal takes security seriously. Your account is protected by our advanced security systems.\n\nThank you for using PayPal.',
        isPhishing: true,
        explanation: 'Phishing! PayPal uses @paypal.com domain, not @paypal-security.com. They also don\'t send unsolicited payment confirmations.'
    }
];

let currentScenarioIndex = 0;
let score = 0;

function initPhishingLab() {
    const startBtn = document.getElementById('startPhishingLab');
    const gameDiv = document.getElementById('phishingGame');
    const safeBtn = document.getElementById('safeButton');
    const phishingBtn = document.getElementById('phishingButton');
    const nextBtn = document.getElementById('nextEmail');

    if (!startBtn || !gameDiv || !safeBtn || !phishingBtn || !nextBtn) return;

    startBtn.addEventListener('click', startPhishingLab);
    safeBtn.addEventListener('click', () => evaluateAnswer(false));
    phishingBtn.addEventListener('click', () => evaluateAnswer(true));
    nextBtn.addEventListener('click', loadNextScenario);
}

function startPhishingLab() {
    document.getElementById('startPhishingLab').style.display = 'none';
    document.getElementById('phishingGame').style.display = 'block';
    currentScenarioIndex = 0;
    score = 0;
    updateScore();
    loadScenario(0);
}

function loadScenario(index) {
    const scenario = phishingScenarios[index];
    if (!scenario) return;

    document.getElementById('emailSubject').textContent = scenario.subject;
    document.getElementById('emailSender').textContent = `From: ${scenario.sender}`;
    document.getElementById('emailTime').textContent = `Time: ${scenario.time}`;
    document.getElementById('emailBody').innerHTML = scenario.body.replace(/\n/g, '<br>');

    document.getElementById('feedback').style.display = 'none';
    document.querySelector('.phishing-actions').style.display = 'flex';
}

function evaluateAnswer(userSaidPhishing) {
    const scenario = phishingScenarios[currentScenarioIndex];
    const isCorrect = userSaidPhishing === scenario.isPhishing;

    if (isCorrect) {
        score++;
        document.getElementById('feedbackTitle').textContent = '🎉 Correct!';
        document.getElementById('feedbackTitle').style.color = 'var(--green)';
    } else {
        document.getElementById('feedbackTitle').textContent = '❌ Incorrect';
        document.getElementById('feedbackTitle').style.color = 'var(--orange)';
    }

    document.getElementById('feedbackText').textContent = scenario.explanation;
    document.getElementById('feedback').style.display = 'block';
    document.querySelector('.phishing-actions').style.display = 'none';
    updateScore();
}

function loadNextScenario() {
    currentScenarioIndex++;
    if (currentScenarioIndex >= phishingScenarios.length) {
        endPhishingLab();
    } else {
        loadScenario(currentScenarioIndex);
    }
}

function updateScore() {
    const scoreDisplay = document.getElementById('scoreDisplay');
    const scoreBar = document.getElementById('scoreBar');

    if (scoreDisplay) {
        scoreDisplay.textContent = `Score: ${score}/${phishingScenarios.length}`;
    }

    if (scoreBar) {
        const percentage = (score / phishingScenarios.length) * 100;
        scoreBar.style.width = `${percentage}%`;
    }
}

function endPhishingLab() {
    const gameDiv = document.getElementById('phishingGame');
    const feedbackDiv = document.getElementById('feedback');

    if (gameDiv) gameDiv.style.display = 'none';

    if (feedbackDiv) {
        feedbackDiv.style.display = 'block';
        document.getElementById('feedbackTitle').textContent = `Lab Complete! Final Score: ${score}/${phishingScenarios.length}`;
        document.getElementById('feedbackTitle').style.color = score >= 4 ? 'var(--green)' : 'var(--orange)';
        document.getElementById('feedbackText').textContent = score >= 4 ?
            'Excellent work, detective! You\'re ready to spot phishing attempts in the wild.' :
            'Good effort! Review the explanations and try again to improve your skills.';
        document.getElementById('nextEmail').style.display = 'none';
    }
}

let attacksBlockedChart = null;
let threatTypesChart = null;

function initLiveThreatMonitor() {
    const attacksCanvas = document.getElementById('attacksBlockedChart');
    const threatCanvas = document.getElementById('threatTypesChart');

    if (!attacksCanvas || !threatCanvas) return;

    initializeAttacksChart();
    initializeThreatTypesChart();
    setInterval(updateThreatData, 2000);
}

function initializeAttacksChart() {
    const ctx = document.getElementById('attacksBlockedChart').getContext('2d');
    const initialData = generateRandomTimeSeriesData();

    attacksBlockedChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: generateTimeLabels(),
            datasets: [{
                label: 'Attacks Blocked per Second',
                data: initialData,
                borderColor: 'var(--green)',
                backgroundColor: 'rgba(0, 255, 136, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: 'var(--green)',
                pointBorderColor: 'var(--cyan)',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    labels: {
                        color: 'var(--text-light)',
                        font: {
                            size: 12,
                            weight: '600'
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Real-Time Attack Blocking Activity',
                    color: 'var(--text-light)',
                    font: {
                        size: 14,
                        weight: '700'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 500,
                    grid: {
                        color: 'rgba(0, 229, 255, 0.1)'
                    },
                    ticks: {
                        color: 'var(--text-muted)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 229, 255, 0.1)'
                    },
                    ticks: {
                        color: 'var(--text-muted)'
                    }
                }
            }
        }
    });
}

function initializeThreatTypesChart() {
    const ctx = document.getElementById('threatTypesChart').getContext('2d');

    threatTypesChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Phishing', 'Malware', 'Ransomware', 'DDoS', 'Zero-Day'],
            datasets: [{
                data: [40, 30, 15, 10, 5],
                backgroundColor: [
                    'var(--warning)',
                    'var(--purple)',
                    'var(--cyan)',
                    'var(--green)',
                    '#FF00FF'
                ],
                borderColor: 'var(--primary-dark)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'var(--text-light)',
                        font: {
                            size: 12,
                            weight: '600'
                        },
                        padding: 20
                    }
                },
                title: {
                    display: true,
                    text: 'Global Threat Distribution',
                    color: 'var(--text-light)',
                    font: {
                        size: 14,
                        weight: '700'
                    }
                }
            }
        }
    });
}

function generateRandomTimeSeriesData() {
    const data = [];
    for (let i = 0; i < 10; i++) {
        data.push(Math.floor(Math.random() * 400) + 50);
    }
    return data;
}

function generateTimeLabels() {
    const labels = [];
    for (let i = 9; i >= 0; i--) {
        const date = new Date();
        date.setSeconds(date.getSeconds() - i * 2);
        labels.push(date.toLocaleTimeString());
    }
    return labels;
}

function updateThreatData() {
    if (!attacksBlockedChart) return;

    attacksBlockedChart.data.labels.shift();
    attacksBlockedChart.data.labels.push(new Date().toLocaleTimeString());

    attacksBlockedChart.data.datasets[0].data.shift();
    attacksBlockedChart.data.datasets[0].data.push(Math.floor(Math.random() * 400) + 50);

    attacksBlockedChart.update('none');
}

function initChecklistCertificate() {
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const generateBtn = document.getElementById('generateCertificate');
    const certificateSection = document.getElementById('certificateSection');

    if (!checkboxes.length || !generateBtn || !certificateSection) return;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const allChecked = Array.from(checkboxes).every(cb => cb.checked);
            certificateSection.style.display = allChecked ? 'block' : 'none';
        });
    });

    generateBtn.addEventListener('click', generateCertificatePDF);
}

function generateCertificatePDF() {
    const { jsPDF } = window.jspdf;
    const userName = prompt('Enter your name for the certificate:');

    if (!userName) return;

    const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    doc.setFillColor(10, 15, 31);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    doc.setLineWidth(3);
    doc.setDrawColor(0, 229, 255);
    doc.rect(15, 15, pageWidth - 30, pageHeight - 30);

    doc.setDrawColor(0, 229, 255);
    doc.setLineWidth(1);
    doc.rect(18, 18, pageWidth - 36, pageHeight - 36);

    doc.setTextColor(0, 255, 136);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('🛡️ CyberGuard', pageWidth / 2, 35, { align: 'center' });

    doc.setTextColor(0, 229, 255);
    doc.setFontSize(32);
    doc.setFont('helvetica', 'bold');
    doc.text('Certificate of Cyber Awareness', pageWidth / 2, 60, { align: 'center' });

    doc.setTextColor(224, 230, 255);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('This certifies that', pageWidth / 2, 85, { align: 'center' });

    doc.setTextColor(0, 255, 136);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text(userName.toUpperCase(), pageWidth / 2, 110, { align: 'center' });

    doc.setTextColor(224, 230, 255);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');

    const certificateText = 'has successfully completed the Personal Cyber Hygiene Checklist\nand demonstrated commitment to cybersecurity best practices and\nresponsible digital citizenship.';
    doc.text(certificateText, pageWidth / 2, 135, {
        align: 'center',
        maxWidth: pageWidth - 60
    });

    const currentDate = new Date();
    const dateStr = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    doc.setTextColor(0, 229, 255);
    doc.setFontSize(11);
    doc.text(`Date: ${dateStr}`, 40, pageHeight - 40);

    doc.setTextColor(0, 255, 136);
    doc.setFontSize(10);
    doc.text('CyberGuard Education Platform', pageWidth - 50, pageHeight - 40);

    doc.save(`CyberAwareness_Certificate_${userName}.pdf`);
}

function initCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    if (!cookieBanner) return;

    const acceptBtn = document.getElementById('acceptCookies');
    const rejectBtn = document.getElementById('rejectCookies');

    if (localStorage.getItem('cookieConsent')) {
        cookieBanner.style.display = 'none';
        return;
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            localStorage.setItem('cookieConsentDate', new Date().toISOString());
            cookieBanner.style.display = 'none';
            initGoogleAnalytics();
        });
    }

    if (rejectBtn) {
        rejectBtn.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'rejected');
            cookieBanner.style.display = 'none';
        });
    }
}

function initGoogleAnalytics() {
}

function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-lazy]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.lazy;
                    img.removeAttribute('data-lazy');
                    observer.unobserve(img);
                }
            });
        });
        images.forEach(img => imageObserver.observe(img));
    }
}

function initExitIntentPopup() {
    const exitIntentModal = document.getElementById('exitIntentModal');
    if (!exitIntentModal) return;

    const closeExitIntent = document.getElementById('closeExitIntent');
    const startScanBtn = document.getElementById('startScanBtn');

    if (localStorage.getItem('exitIntentShown')) return;

    document.addEventListener('mouseleave', (e) => {
        if (e.clientY <= 0) {
            exitIntentModal.style.display = 'flex';
            localStorage.setItem('exitIntentShown', 'true');
        }
    });

    if (closeExitIntent) {
        closeExitIntent.addEventListener('click', () => {
            exitIntentModal.style.display = 'none';
        });
    }

    if (startScanBtn) {
        startScanBtn.addEventListener('click', () => {
            const email = prompt('Enter your email for free security scan results:');
            if (email) {
                alert(`Thank you! We'll send your security scan results to ${email} within 24 hours.`);
                exitIntentModal.style.display = 'none';
            }
        });
    }

    exitIntentModal.addEventListener('click', (e) => {
        if (e.target === exitIntentModal) {
            exitIntentModal.style.display = 'none';
        }
    });
}

const threatMapData = {
    regions: [
        { name: 'North America', lat: 40, lng: -95, attacks: 125, color: '#FF6600', risk: 'High' },
        { name: 'Europe', lat: 50, lng: 10, attacks: 98, color: '#FF6600', risk: 'High' },
        { name: 'East Asia', lat: 35, lng: 105, attacks: 156, color: '#FF0000', risk: 'Critical' },
        { name: 'Southeast Asia', lat: 10, lng: 105, attacks: 67, color: '#FFCC00', risk: 'Medium' },
        { name: 'South America', lat: -15, lng: -60, attacks: 43, color: '#FFCC00', risk: 'Medium' },
        { name: 'Middle East', lat: 25, lng: 55, attacks: 89, color: '#FF6600', risk: 'High' },
        { name: 'Africa', lat: 0, lng: 20, attacks: 52, color: '#FFCC00', risk: 'Medium' },
        { name: 'Oceania', lat: -25, lng: 135, attacks: 34, color: '#00FF00', risk: 'Low' },
        { name: 'India', lat: 20, lng: 78, attacks: 72, color: '#FF6600', risk: 'High' },
    ],
    attackTypes: [
        { type: 'Ransomware', count: 234, percentage: 34 },
        { type: 'Phishing', count: 189, percentage: 27 },
        { type: 'DDoS', count: 145, percentage: 21 },
        { type: 'Malware', count: 98, percentage: 14 },
        { type: 'Zero-Day', count: 23, percentage: 3 },
    ]
};

function initThreatMap() {
    const leafletMapDiv = document.getElementById('leafletMap');
    const canvas = document.getElementById('threatMapCanvas');
    
    if (leafletMapDiv && window.L) {
        initLeafletMap();
    } else if (canvas) {
        drawThreatMap();
    } else {
        return;
    }

    updateThreatStatistics();
    populateThreatTable();
    initAttackTypesChart();
    generateAttackFeed();

    setInterval(() => {
        updateThreatData();
        updateThreatStatistics();
        generateAttackFeed();
    }, 5000);
}

function initLeafletMap() {
    const mapDiv = document.getElementById('leafletMap');
    if (!mapDiv || !window.L) return;
    
    const map = L.map('leafletMap').setView([20, 0], 2);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
        className: 'leaflet-tile-light'
    }).addTo(map);
    
    const threatData = [
        { name: 'North America', lat: 45.5, lng: -95, incidents: 32, type: 'critical', color: '#FF0000' },
        { name: 'Europe', lat: 54, lng: 15, incidents: 28, type: 'critical', color: '#FF0000' },
        { name: 'Asia-Pacific', lat: 34, lng: 100, incidents: 24, type: 'high', color: '#FF6600' },
        { name: 'South America', lat: -15, lng: -60, incidents: 15, type: 'high', color: '#FF6600' },
        { name: 'Middle East', lat: 20, lng: 40, incidents: 18, type: 'high', color: '#FF6600' },
        { name: 'Africa', lat: -10, lng: 20, incidents: 8, type: 'medium', color: '#FFCC00' },
        { name: 'Oceania', lat: -27, lng: 133, incidents: 5, type: 'medium', color: '#FFCC00' }
    ];
    
    threatData.forEach(threat => {
        const radius = threat.incidents * 1.5;
        const circleMarker = L.circleMarker([threat.lat, threat.lng], {
            radius: Math.sqrt(threat.incidents) * 3,
            fillColor: threat.color,
            color: threat.color,
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.6
        }).addTo(map);
        
        const popup = `<div style="text-align: center; color: #333;">
            <strong>${threat.name}</strong><br>
            Incidents: <span style="font-weight: 700; color: ${threat.color};">${threat.incidents}</span><br>
            Status: <span style="font-weight: 600;">${threat.type.toUpperCase()}</span><br>
            <span style="font-size: 0.85rem; color: #666;">2025 Threat Level: ${threat.type === 'critical' ? '🔴 Critical' : threat.type === 'high' ? '🟠 High' : '🟡 Medium'}</span>
        </div>`;
        
        circleMarker.bindPopup(popup);
        circleMarker.on('mouseover', function() { this.openPopup(); });
        circleMarker.on('mouseout', function() { this.closePopup(); });
    });
    
    const info = L.control({position: 'topleft'});
    info.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'info' );
        div.style.background = 'rgba(26, 39, 68, 0.95)';
        div.style.border = '2px solid var(--cyan)';
        div.style.borderRadius = '15px';
        div.style.padding = '1rem';
        div.style.color = 'var(--text-light)';
        div.style.fontFamily = 'Inter, sans-serif';
        div.innerHTML = `<div style="text-align: center;">
            <p style="margin: 0 0 0.5rem 0; font-weight: 600;">Global Threat Index</p>
            <p style="margin: 0; font-size: 1.5rem; color: var(--cyan);">↑ 23%</p>
            <p style="margin: 0.3rem 0 0 0; font-size: 0.85rem; color: var(--text-muted);">vs last week</p>
        </div>`;
        return div;
    };
    info.addTo(map);
}

function drawThreatMap() {
    const canvas = document.getElementById('threatMapCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width;
    canvas.height = rect.height;

    ctx.fillStyle = 'rgba(10, 15, 30, 0.9)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const scaleX = canvas.width / 360;
    const scaleY = canvas.height / 180;

    ctx.strokeStyle = 'rgba(0, 229, 255, 0.15)';
    ctx.lineWidth = 1;
    for (let i = -180; i <= 180; i += 30) {
        const x = centerX + i * scaleX;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let i = -90; i <= 90; i += 30) {
        const y = centerY - i * scaleY;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    threatMapData.regions.forEach((region, index) => {
        const x = centerX + region.lng * scaleX;
        const y = centerY - region.lat * scaleY;

        ctx.fillStyle = region.color;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.beginPath();
        ctx.arc(x, y, 16, 0, Math.PI * 2);
        ctx.stroke();
    });
}

function updateThreatStatistics() {
    const totalAttacks = threatMapData.regions.reduce((sum, r) => sum + r.attacks, 0);
    const criticalIncidents = threatMapData.regions.filter(r => r.risk === 'Critical').length;
    const countriesAffected = threatMapData.regions.length;
    const attackTypes = threatMapData.attackTypes.length;

    const el1 = document.getElementById('totalAttacks');
    if (el1) el1.textContent = totalAttacks;

    const el2 = document.getElementById('criticalIncidents');
    if (el2) el2.textContent = threatMapData.regions.filter(r => r.attacks > 100).length;

    const el3 = document.getElementById('countriesAffected');
    if (el3) el3.textContent = countriesAffected;

    const el4 = document.getElementById('attackTypes');
    if (el4) el4.textContent = attackTypes;
}

function populateThreatTable() {
    const tbody = document.getElementById('threatTableBody');
    if (!tbody) return;

    tbody.innerHTML = threatMapData.regions.map(region => `
        <tr>
            <td>${region.name}</td>
            <td>${region.attacks}</td>
            <td><span class="threat-trend-up">↑ +12%</span></td>
            <td><span class="threat-risk-${region.risk === 'Critical' ? 'critical' : region.risk === 'High' ? 'high' : 'medium'}">${region.risk}</span></td>
        </tr>
    `).join('');
}

function initAttackTypesChart(retryCount = 0) {
    const container = document.getElementById('attackTypesChart');
    if (!container) {
        console.warn('Chart container attackTypesChart not found');
        return;
    }
    
    if (typeof Highcharts === 'undefined') {
        if (retryCount < 50) {
            setTimeout(() => initAttackTypesChart(retryCount + 1), 100);
        } else {
            console.error('Highcharts failed to load after multiple retries');
        }
        return;
    }

    console.log('Initializing 3D Attack Types Chart...');
    
    if (!threatMapData || !threatMapData.attackTypes) {
        console.error('threatMapData.attackTypes not available');
        return;
    }
    
    console.log('Attack types data:', threatMapData.attackTypes);
    
    try {
        Highcharts.chart('attackTypesChart', {
            chart: {
                type: 'pie',
                backgroundColor: 'transparent',
                options3d: {
                    enabled: true,
                    alpha: 60,
                    beta: 0,
                    depth: 100,
                    viewDistance: 25
                }
            },
            title: {
                text: null
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b><br/>Count: <b>{point.y}</b>',
                backgroundColor: 'rgba(26, 39, 68, 0.9)',
                style: {
                    color: '#B0BEC5'
                },
                borderColor: '#00E5FF',
                borderRadius: 10
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 45,
                    innerSize: 0,
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.percentage:.0f}%</b>',
                        style: {
                            color: '#FFFFFF',
                            textOutline: '2px #000000',
                            fontWeight: 'bold',
                            fontSize: '16px'
                        },
                        distance: -40,
                        connectorWidth: 0
                    },
                    showInLegend: true,
                    slicedOffset: 0,
                    borderWidth: 2,
                    borderColor: '#000000'
                }
            },
            legend: {
                itemStyle: {
                    color: '#B0BEC5'
                },
                itemHoverStyle: {
                    color: '#00E5FF'
                }
            },
            series: [{
                name: 'Attacks',
                colorByPoint: true,
                data: threatMapData.attackTypes.map((t, index) => ({
                    name: t.type,
                    y: t.count,
                    sliced: index === 0,
                    selected: index === 0
                })),
                colors: [
                    '#3498db',
                    '#34495e',
                    '#e74c3c',
                    '#27ae60',
                    '#f39c12'
                ]
            }]
        });
        console.log('3D Chart created successfully');
    } catch (error) {
        console.error('Error creating chart:', error);
        return;
    }

    const list = document.getElementById('threatTypesList');
    if (list) {
        const listContent = document.createElement('div');
        listContent.innerHTML = threatMapData.attackTypes.map(t => `
            <div class="threat-type-item">
                <span class="threat-type-name">${t.type}</span>
                <span class="threat-type-count">${t.count}</span>
            </div>
        `).join('');
        const oldList = list.querySelector('div');
        if (oldList) oldList.remove();
        list.appendChild(listContent);
    }
}

function generateAttackFeed() {
    const feed = document.getElementById('attackFeed');
    if (!feed) return;

    const incidents = [
        { time: '14:32:18', location: 'East Asia', type: 'Ransomware Attack', severity: 'critical', details: 'Widespread ransomware campaign targeting financial institutions' },
        { time: '14:28:45', location: 'Europe', type: 'DDoS Attack', severity: 'high', details: 'Coordinated DDoS targeting government infrastructure' },
        { time: '14:25:12', location: 'North America', type: 'Phishing Campaign', severity: 'high', details: 'Large-scale phishing targeting corporate email users' },
        { time: '14:21:33', location: 'Middle East', type: 'Malware Detected', severity: 'high', details: 'New variant of banking trojan detected in multiple regions' },
        { time: '14:18:07', location: 'Southeast Asia', type: 'SQL Injection', severity: 'medium', details: 'Automated SQL injection attempts on e-commerce platforms' },
    ];

    feed.innerHTML = incidents.map(incident => `
        <div class="attack-incident ${incident.severity}">
            <div class="attack-time">${incident.time} UTC</div>
            <div class="attack-location">📍 ${incident.location}</div>
            <div class="attack-type">${incident.type}</div>
            <div class="attack-severity ${incident.severity}">${incident.severity.toUpperCase()}</div>
        </div>
    `).join('');
}

function updateThreatMapData() {
    if (typeof threatMapData === 'undefined' || !threatMapData || !threatMapData.regions) return;
    threatMapData.regions.forEach(region => {
        region.attacks += Math.floor(Math.random() * 20) - 5;
        if (region.attacks < 0) region.attacks = 0;
    });
    drawThreatMap();
}

function initHamburgerMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const hamburgerOverlay = document.getElementById('hamburger-overlay');
    const hamburgerClose = document.getElementById('hamburger-close');
    const hamburgerLinks = document.querySelectorAll('.hamburger-link');
    const dropdownButtons = document.querySelectorAll('.hamburger-dropdown-btn');

    if (!hamburgerBtn || !hamburgerMenu || !hamburgerOverlay || !hamburgerClose) return;

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
        hamburgerOverlay.classList.toggle('active');
        document.body.style.overflow = hamburgerMenu.classList.contains('active') ? 'hidden' : '';
    });

    hamburgerClose.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        hamburgerMenu.classList.remove('active');
        hamburgerOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    hamburgerOverlay.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        hamburgerMenu.classList.remove('active');
        hamburgerOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    hamburgerLinks.forEach(link => {
        if (!link.classList.contains('hamburger-dropdown-btn')) {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                hamburgerMenu.classList.remove('active');
                hamburgerOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    });

    dropdownButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = btn.closest('.hamburger-dropdown');
            parent.classList.toggle('active');
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            hamburgerBtn.classList.remove('active');
            hamburgerMenu.classList.remove('active');
            hamburgerOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

function downloadThreatReport() {
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        const pageHeight = doc.internal.pageSize.getHeight();
        const pageWidth = doc.internal.pageSize.getWidth();
        let yPosition = 20;
        const margin = 15;
        const lineHeight = 7;
        const maxWidth = pageWidth - (margin * 2);

        doc.setFontSize(22);
        doc.setTextColor(0, 229, 255);
        doc.text('2025 CYBER THREATS REPORT', pageWidth / 2, yPosition, { align: 'center' });
        
        yPosition += 10;
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text('CyberGuard Security Intelligence | December 2024', pageWidth / 2, yPosition, { align: 'center' });

        yPosition += 15;
        doc.setTextColor(0, 0, 0);
        
        const sections = [
            {
                title: '1. AI-Powered Attacks & GenAI Threats',
                content: 'AI and machine learning are accelerating threat sophistication. Attackers now use GenAI for:\n• Deepfake-based phishing campaigns\n• Automated malware generation and evasion\n• Personalized spear-phishing at scale\n• Vulnerability discovery automation\n\nDefense: Implement AI-powered detection systems, behavioral analytics, and human verification layers for critical transactions.'
            },
            {
                title: '2. Ransomware Evolution & Mitigation',
                content: 'Ransomware remains the #1 threat with 2025 targeting:\n• Cloud infrastructure and backups\n• Supply chain vulnerabilities\n• Managed service providers (MSPs)\n• AI-enhanced payload delivery\n\nMitigation: Zero Trust architecture, immutable backups, segmentation, and incident response plans with tested restoration procedures.'
            },
            {
                title: '3. Zero Trust Architecture',
                content: 'Zero Trust adoption is critical. Key principles:\n• Verify every access request\n• Assume breach mentality\n• Implement least privilege access\n• Continuous monitoring and validation\n\nImplementation: MFA, device posture checks, micro-segmentation, and centralized logging for all activities.'
            },
            {
                title: '4. Supply Chain Attacks',
                content: 'Supply chain attacks increased 300% in 2024. Focus areas:\n• Third-party software vulnerabilities\n• Compromised dependencies\n• Vendor risk assessment\n• SolarWinds-style attacks\n\nStrategy: Vendor security assessments, SBOM (Software Bill of Materials) tracking, and continuous monitoring of dependencies.'
            },
            {
                title: '5. Nation-State Threats',
                content: 'Nation-state actors targeting:\n• Critical infrastructure\n• Financial institutions\n• Research and technology sectors\n• Democratic processes\n\nDefense: Government coordination, cyber resilience planning, and advanced threat intelligence sharing.'
            },
            {
                title: '6. Incident Response Best Practices',
                content: 'Effective incident response requires:\n• Prepared and tested playbooks\n• 24/7 monitoring and alerting\n• Rapid containment procedures\n• Forensic capabilities\n• Communication plans for stakeholders\n\nRecommendation: Conduct regular tabletop exercises and penetration testing to validate response capabilities.'
            }
        ];

        sections.forEach(section => {
            if (yPosition > pageHeight - 30) {
                doc.addPage();
                yPosition = 20;
            }

            doc.setFontSize(12);
            doc.setTextColor(0, 150, 200);
            doc.text(section.title, margin, yPosition);
            yPosition += 8;

            doc.setFontSize(10);
            doc.setTextColor(50, 50, 50);
            const lines = doc.splitTextToSize(section.content, maxWidth);
            doc.text(lines, margin, yPosition);
            yPosition += (lines.length * lineHeight) + 5;
        });

        if (yPosition > pageHeight - 30) {
            doc.addPage();
            yPosition = 20;
        }

        doc.setFontSize(12);
        doc.setTextColor(0, 150, 200);
        doc.text('Key Recommendations for 2025', margin, yPosition);
        yPosition += 8;

        doc.setFontSize(10);
        doc.setTextColor(50, 50, 50);
        const recommendations = [
            '1. Implement Zero Trust Architecture across all systems',
            '2. Conduct regular security awareness training for staff',
            '3. Deploy AI-powered threat detection and response',
            '4. Maintain comprehensive, tested backup procedures',
            '5. Perform vendor security assessments quarterly',
            '6. Develop and test incident response plans',
            '7. Implement micro-segmentation in networks',
            '8. Monitor for supply chain vulnerabilities',
            '9. Establish threat intelligence sharing programs',
            '10. Invest in security monitoring and analytics'
        ];

        doc.setFontSize(9);
        recommendations.forEach(rec => {
            if (yPosition > pageHeight - 20) {
                doc.addPage();
                yPosition = 20;
            }
            doc.text(rec, margin, yPosition);
            yPosition += 6;
        });

        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text('This report is provided for informational purposes by CyberGuard Security Intelligence.', 
                 margin, pageHeight - 10);

        const date = new Date();
        const filename = `CyberGuard-Threat-Report-2025-${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}.pdf`;
        doc.save(filename);
    } catch (error) {
        console.error('Error generating threat report PDF:', error);
        alert('Error generating PDF. Please try again or contact support.');
    }
}

function initLiveCounters() {
    const baseAttacks = 847000;
    const baseIncidents = 562;
    const baseDamagesPrevented = 2300000000;
    const baseThreatDetection = 98.7;
    
    let attacksCount = baseAttacks;
    let incidentsCount = baseIncidents;
    let damagesPrevented = baseDamagesPrevented;
    let threatDetectionRate = baseThreatDetection;
    
    function updateCounters() {
        attacksCount += Math.floor(Math.random() * 500) + 100;
        incidentsCount += Math.floor(Math.random() * 5) + 1;
        damagesPrevented += Math.floor(Math.random() * 50000000) + 10000000;
        threatDetectionRate = Math.min(99.99, threatDetectionRate + (Math.random() * 0.01));
        
        updateCounterDisplay('attacks-blocked-counter', formatNumber(attacksCount));
        updateCounterDisplay('incidents-prevented-counter', incidentsCount.toLocaleString());
        updateCounterDisplay('damages-prevented-counter', formatCurrency(damagesPrevented));
        updateCounterDisplay('threat-detection-counter', threatDetectionRate.toFixed(2) + '%');
    }
    
    function updateCounterDisplay(elementId, value) {
        const element = document.querySelector(`[data-counter-id="${elementId}"]`);
        if (element) {
            element.textContent = value;
            element.style.animation = 'none';
            setTimeout(() => {
                element.style.animation = 'pulse 0.6s ease-in-out';
            }, 10);
        }
    }
    
    function formatNumber(num) {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
        if (num >= 1000) return (num / 1000).toFixed(0) + 'K+';
        return num.toString();
    }
    
    function formatCurrency(num) {
        if (num >= 1000000000) return '$' + (num / 1000000000).toFixed(1) + 'B+';
        if (num >= 1000000) return '$' + (num / 1000000).toFixed(1) + 'M+';
        return '$' + (num / 1000).toFixed(0) + 'K+';
    }
    
    updateCounters();
    setInterval(updateCounters, 3000);
}

function openLeadMagnetForm(magnetType) {
    const modal = document.getElementById('leadMagnetModal');
    if (!modal) return;
    
    const titles = {
        'ransomware-playbook': 'Ransomware Response Playbook',
        'security-checklist': 'Essential Security Checklist',
        'gdpr-guide': 'GDPR & Data Privacy Guide',
        'phishing-toolkit': 'Phishing Prevention Toolkit',
        'password-policy': 'Password Security Policy',
        'incident-response': 'Incident Response Plan',
        'ai-threat-assessment': 'Free AI Threat Assessment Guide',
        'zero-trust-checklist': 'Zero Trust Implementation Checklist'
    };
    
    const descriptions = {
        'ransomware-playbook': 'Get our comprehensive ransomware response playbook with incident procedures, containment strategies, and recovery steps.',
        'security-checklist': 'Download the 50-point security checklist covering network security, access control, data protection, and incident response.',
        'gdpr-guide': 'Learn GDPR requirements, compliance obligations, breach notifications, and implementation strategies.',
        'phishing-toolkit': 'Access employee training materials, phishing templates for testing, and detection techniques.',
        'password-policy': 'Get a ready-to-use password policy template, MFA implementation guide, and manager recommendations.',
        'incident-response': 'Download our complete incident response framework with roles, escalation procedures, and communication templates.',
        'ai-threat-assessment': 'Comprehensive guide on AI-powered threats, detection strategies, and defensive measures for 2025.',
        'zero-trust-checklist': 'Step-by-step checklist for implementing Zero Trust Architecture across network, endpoints, and cloud.'
    };
    
    document.getElementById('formTitle').textContent = titles[magnetType] || 'Download Your Guide';
    document.getElementById('formDescription').textContent = descriptions[magnetType] || 'Enter your details to download this free resource.';
    
    const form = document.getElementById('leadMagnetFormElement');
    if (form) {
        form.dataset.magnetType = magnetType;
        form.reset();
    }
    
    modal.style.display = 'flex';
}

function closeLeadMagnetForm() {
    const modal = document.getElementById('leadMagnetModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function initLeadMagnetForm() {
    const modal = document.getElementById('leadMagnetModal');
    const form = document.getElementById('leadMagnetFormElement');
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const magnetType = form.dataset.magnetType || 'lead-magnet';
        const formData = {
            firstName: form.elements['firstName'].value,
            email: form.elements['email'].value,
            company: form.elements['company'].value,
            companySize: form.elements['companySize'].value,
            magnet_type: magnetType,
            submission_date: new Date().toISOString(),
            _subject: `New Lead Magnet Download: ${magnetType}`
        };
        
        try {
            const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                alert('Thank you! Check your email for the download link. It will arrive within seconds.');
                closeLeadMagnetForm();
                form.reset();
            } else {
                alert('There was an issue submitting your request. Please try again or contact us at support@cyberguard.com');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Submission failed. Please try again or contact support.');
        }
    });
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeLeadMagnetForm();
            }
        });
    }
}

function initRiskCalculatorQuiz() {
    const startBtn = document.getElementById('startRiskQuiz');
    if (!startBtn) return;
    
    startBtn.addEventListener('click', () => {
        const modal = document.getElementById('riskCalculatorModal');
        if (modal) {
            modal.style.display = 'flex';
            window.scrollTo(0, 0);
        }
    });
    
    const closeBtn = document.getElementById('closeRiskCalculator');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const modal = document.getElementById('riskCalculatorModal');
            if (modal) modal.style.display = 'none';
        });
    }
    
    const submitBtn = document.getElementById('submitRiskQuiz');
    if (submitBtn) {
        submitBtn.addEventListener('click', calculateRiskScore);
    }
    
    const modal = document.getElementById('riskCalculatorModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

function calculateRiskScore() {
    const form = document.getElementById('riskQuizForm');
    if (!form) return;
    
    let totalScore = 0;
    let maxScore = 0;
    
    const questions = [
        { name: 'mfa', weight: 15, high: 'no', low: 'yes' },
        { name: 'updates', weight: 12, high: 'rarely', low: 'monthly' },
        { name: 'backup', weight: 18, high: 'no', low: 'automated' },
        { name: 'training', weight: 10, high: 'no', low: 'annual' },
        { name: 'segmentation', weight: 15, high: 'none', low: 'full' },
        { name: 'vpn', weight: 8, high: 'never', low: 'always' },
        { name: 'monitoring', weight: 12, high: 'none', low: 'active' },
        { name: 'incident', weight: 10, high: 'no', low: 'yes' }
    ];
    
    questions.forEach(q => {
        const value = form.elements[q.name]?.value;
        maxScore += q.weight;
        
        if (value === q.high) {
            totalScore += q.weight;
        } else if (value === q.low) {
            totalScore += 0;
        } else if (value === 'medium' || value === 'sometimes' || value === 'partial') {
            totalScore += q.weight * 0.5;
        }
    });
    
    const percentage = Math.round((totalScore / maxScore) * 100);
    const riskLevel = percentage <= 33 ? 'LOW RISK' : percentage <= 66 ? 'MEDIUM RISK' : 'HIGH RISK';
    const riskColor = percentage <= 33 ? '#00ff1e' : percentage <= 66 ? '#FFB81C' : '#FF6B00';
    
    const resultsDiv = document.getElementById('riskQuizResults');
    if (resultsDiv) {
        resultsDiv.innerHTML = `
            <div style="text-align: center; padding: 2rem; background: rgba(26, 39, 68, 0.8); border-radius: 15px; border: 2px solid ${riskColor};">
                <h3 style="color: ${riskColor}; margin-bottom: 1rem;">Your Security Risk Score</h3>
                <div style="font-size: 3rem; font-weight: 700; color: ${riskColor}; margin-bottom: 1rem;">${percentage}%</div>
                <p style="font-size: 1.3rem; color: ${riskColor}; margin-bottom: 1.5rem; font-weight: 600;">${riskLevel}</p>
                <p style="color: var(--text-muted); margin-bottom: 1rem;">
                    ${percentage <= 33 ? 'Your organization faces significant security risks. Immediate action on critical areas is recommended.' : percentage <= 66 ? 'You have a balanced security posture, but key areas need improvement.' : 'Excellent security practices! Continue monitoring and stay updated on emerging threats.'}
                </p>
                <div style="background: rgba(0, 229, 255, 0.1); border-left: 4px solid var(--cyan); padding: 1rem; border-radius: 8px; text-align: left; margin-top: 1.5rem;">
                    <p style="color: var(--text-light); font-weight: 600; margin-bottom: 0.5rem;">Next Steps:</p>
                    <ul style="color: var(--text-muted); margin: 0; padding-left: 1.5rem;">
                        <li>Review areas with lower scores</li>
                        <li>Create an action plan for improvements</li>
                        <li>Schedule quarterly assessments</li>
                        <li><a href="services.html" style="color: var(--cyan); text-decoration: underline;">Contact our experts</a> for professional guidance</li>
                    </ul>
                </div>
            </div>
        `;
        resultsDiv.style.display = 'block';
        
        if (typeof window.saveQuizScore === 'function') {
            window.saveQuizScore(percentage, 'risk-assessment').catch(err => {
                console.log('Could not save quiz score:', err);
            });
        }
    }
}

function runBrowserSecurityScan() {
    const resultsDiv = document.getElementById('browserScanResults');
    if (!resultsDiv) return;
    
    const checks = [];
    let score = 0;
    const maxScore = 100;
    
    const userAgent = navigator.userAgent;
    const isChrome = /Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor);
    const isFirefox = /Firefox/.test(userAgent);
    const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    const isEdge = /Edg/.test(userAgent);
    
    const browserName = isChrome ? 'Chrome' : isFirefox ? 'Firefox' : isSafari ? 'Safari' : isEdge ? 'Edge' : 'Unknown';
    
    checks.push({
        name: `Browser: ${browserName}`,
        status: isChrome || isFirefox || isSafari || isEdge ? 'PASS' : 'WARN',
        score: (isChrome || isFirefox || isSafari || isEdge) ? 10 : 5,
        info: `Detected ${browserName}. Modern browsers have better security features.`
    });
    
    checks.push({
        name: 'HTTPS Support',
        status: window.location.protocol === 'https:' ? 'PASS' : 'FAIL',
        score: window.location.protocol === 'https:' ? 10 : 0,
        info: window.location.protocol === 'https:' ? 'Page loaded over secure HTTPS' : 'Page loaded over insecure HTTP'
    });
    
    checks.push({
        name: 'TLS 1.2+ Support',
        status: 'PASS',
        score: 10,
        info: 'All modern browsers support TLS 1.2 and 1.3'
    });
    
    checks.push({
        name: 'WebGL Support',
        status: !!document.createElement('canvas').getContext('webgl') ? 'PASS' : 'WARN',
        score: 5,
        info: 'WebGL capabilities detected'
    });
    
    checks.push({
        name: 'Web Crypto API',
        status: !!window.crypto && !!window.crypto.subtle ? 'PASS' : 'FAIL',
        score: !!window.crypto && !!window.crypto.subtle ? 10 : 0,
        info: 'Cryptographic operations support'
    });
    
    checks.push({
        name: 'Service Worker',
        status: 'serviceWorker' in navigator ? 'PASS' : 'WARN',
        score: 'serviceWorker' in navigator ? 10 : 5,
        info: 'Service Workers enable offline capabilities'
    });
    
    checks.push({
        name: 'Geolocation Privacy',
        status: 'geolocation' in navigator ? 'PASS' : 'INFO',
        score: 'geolocation' in navigator ? 10 : 5,
        info: 'Geolocation API available (user can deny access)'
    });
    
    checks.push({
        name: 'Battery Status API',
        status: 'getBattery' in navigator ? 'INFO' : 'PASS',
        score: 'getBattery' in navigator ? 5 : 10,
        info: 'Battery API status - deprecation improves privacy'
    });
    
    checks.push({
        name: 'LocalStorage Protection',
        status: (() => {
            try {
                localStorage.test = 'test';
                delete localStorage.test;
                return 'PASS';
            } catch(e) {
                return 'WARN';
            }
        })(),
        score: 10,
        info: 'LocalStorage available for secure data storage'
    });
    
    checks.push({
        name: '2025 Threat Readiness',
        status: isChrome || isFirefox || isEdge ? 'GOOD' : 'CHECK',
        score: (isChrome || isFirefox || isEdge) ? 15 : 10,
        info: 'Updated browsers have AI/ML threat protections'
    });
    
    score = checks.reduce((sum, check) => sum + check.score, 0);
    const percentage = Math.min(100, (score / maxScore) * 100);
    const riskLevel = percentage >= 80 ? 'LOW RISK' : percentage >= 60 ? 'MEDIUM RISK' : 'HIGH RISK';
    const riskColor = percentage >= 80 ? '#00ff1e' : percentage >= 60 ? '#FFB81C' : '#FF6B00';
    
    let html = `
        <div style="background: rgba(26, 39, 68, 0.8); border: 2px solid ${riskColor}; border-radius: 15px; padding: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 style="color: ${riskColor}; margin: 0;">Browser Security Scan Results</h3>
                <div style="font-size: 2.5rem; font-weight: 700; color: ${riskColor};">${Math.round(percentage)}%</div>
            </div>
            <p style="color: ${riskColor}; font-weight: 600; margin-bottom: 1.5rem; font-size: 1.1rem;">${riskLevel}</p>
            <div style="display: flex; flex-direction: column; gap: 0.8rem;">
    `;
    
    checks.forEach(check => {
        const statusColor = check.status === 'PASS' || check.status === 'GOOD' ? 'var(--green)' : 
                           check.status === 'WARN' || check.status === 'INFO' ? 'var(--warning)' : 'var(--purple)';
        html += `
            <div style="background: rgba(0, 0, 0, 0.3); padding: 0.8rem; border-left: 3px solid ${statusColor}; border-radius: 5px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.3rem;">
                    <span style="color: var(--text-light); font-weight: 600;">${check.name}</span>
                    <span style="color: ${statusColor}; font-weight: 700; font-size: 0.9rem;">${check.status}</span>
                </div>
                <p style="color: var(--text-muted); font-size: 0.85rem; margin: 0;">${check.info}</p>
            </div>
        `;
    });
    
    html += `
            </div>
            <div style="background: rgba(0, 229, 255, 0.1); border-left: 4px solid var(--cyan); padding: 1rem; border-radius: 8px; margin-top: 1.5rem;">
                <p style="color: var(--text-light); font-weight: 600; margin-bottom: 0.5rem;">🛡️ 2025 Security Recommendations:</p>
                <ul style="color: var(--text-muted); margin: 0; padding-left: 1.5rem; font-size: 0.9rem;">
                    <li>Keep your browser updated to latest version</li>
                    <li>Enable automatic security updates</li>
                    <li>Use strong, unique passwords with 2FA</li>
                    <li>Install reputable browser security extensions</li>
                    <li>Clear cookies/cache regularly</li>
                    <li>Monitor for AI-based phishing attacks</li>
                </ul>
            </div>
        </div>
    `;
    
    resultsDiv.innerHTML = html;
    resultsDiv.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[class*="notification"], [id*="notification"], [class*="update"], .update-modal, .notification-box').forEach(el => el.remove());
    
    initCookieBanner();
    initLazyLoading();
    initExitIntentPopup();
    initLiveThreatMonitor();
    initChecklistCertificate();
    initThreatMap();
    initHamburgerMenu();
    initLiveCounters();
    initLeadMagnetForm();
    initRiskCalculatorQuiz();
    expandOwaspAccordions();
});

function expandOwaspAccordions() {
    if (window.location.pathname.includes('frameworks.html')) {
        setTimeout(() => {
            const accordions = document.querySelectorAll('.accordion');
            accordions.forEach((accordion) => {
                const header = accordion.querySelector('.accordion-header');
                const content = accordion.querySelector('.accordion-content');
                if (header && content) {
                    accordion.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        }, 100);
    }
}

window.checkPasswordStrength = checkPasswordStrength;
window.generateHash = generateHash;
window.copyToClipboard = copyToClipboard;
window.encodeBase64 = encodeBase64;
window.decodeBase64 = decodeBase64;
window.simulateSSLCheck = simulateSSLCheck;
window.simulateBreachCheck = simulateBreachCheck;
window.generateGUID = generateGUID;
window.convertColor = convertColor;
window.convertTimestamp = convertTimestamp;
window.getCurrentTimestamp = getCurrentTimestamp;
window.validateJSON = validateJSON;
window.runBrowserSecurityScan = runBrowserSecurityScan;
