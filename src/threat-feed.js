const CISA_KEV_API = 'https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json';
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
const REFRESH_INTERVAL = 10 * 60 * 1000;

const MOCK_THREATS = [
  {
    cveID: "CVE-2024-21887",
    vendorProject: "Ivanti",
    product: "Connect Secure",
    vulnerabilityName: "Ivanti Connect Secure Command Injection Vulnerability",
    dateAdded: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    shortDescription: "Ivanti Connect Secure contains a command injection vulnerability that allows an authenticated administrator to send specially crafted requests and execute arbitrary commands.",
    requiredAction: "Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.",
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  },
  {
    cveID: "CVE-2024-0012",
    vendorProject: "Palo Alto Networks",
    product: "PAN-OS",
    vulnerabilityName: "Palo Alto Networks PAN-OS Authentication Bypass Vulnerability",
    dateAdded: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    shortDescription: "Palo Alto Networks PAN-OS contains an authentication bypass vulnerability in the management web interface that allows an unauthenticated attacker to gain PAN-OS administrator privileges.",
    requiredAction: "Apply mitigations per vendor instructions.",
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  },
  {
    cveID: "CVE-2023-46805",
    vendorProject: "Ivanti",
    product: "Policy Secure",
    vulnerabilityName: "Ivanti Policy Secure Authentication Bypass Vulnerability",
    dateAdded: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    shortDescription: "Ivanti Connect Secure and Policy Secure contain an authentication bypass vulnerability allowing a remote attacker to access restricted resources by bypassing control checks.",
    requiredAction: "Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.",
    dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  },
  {
    cveID: "CVE-2023-4966",
    vendorProject: "Citrix",
    product: "NetScaler ADC and Gateway",
    vulnerabilityName: "Citrix NetScaler Buffer Overflow Vulnerability",
    dateAdded: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    shortDescription: "Citrix NetScaler ADC and NetScaler Gateway contain a buffer overflow vulnerability that could allow an unauthenticated attacker to conduct denial-of-service attacks and potentially remote code execution.",
    requiredAction: "Apply mitigations per vendor instructions.",
    dueDate: new Date(Date.now()).toISOString().split('T')[0]
  },
  {
    cveID: "CVE-2024-3400",
    vendorProject: "Palo Alto Networks",
    product: "PAN-OS",
    vulnerabilityName: "Palo Alto Networks PAN-OS Command Injection Vulnerability",
    dateAdded: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    shortDescription: "Palo Alto Networks PAN-OS contains a command injection vulnerability in the GlobalProtect feature that allows an unauthenticated attacker to execute arbitrary code with root privileges.",
    requiredAction: "Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.",
    dueDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  },
  {
    cveID: "CVE-2023-20198",
    vendorProject: "Cisco",
    product: "IOS XE",
    vulnerabilityName: "Cisco IOS XE Web UI Privilege Escalation Vulnerability",
    dateAdded: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    shortDescription: "Cisco IOS XE contains a privilege escalation vulnerability in the web UI feature that allows an unauthenticated, remote attacker to create an account with privilege level 15 access.",
    requiredAction: "Apply mitigations per vendor instructions.",
    dueDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  },
  {
    cveID: "CVE-2024-21893",
    vendorProject: "Ivanti",
    product: "Connect Secure",
    vulnerabilityName: "Ivanti Connect Secure Server-Side Request Forgery Vulnerability",
    dateAdded: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    shortDescription: "Ivanti Connect Secure contains a server-side request forgery vulnerability in the SAML component that allows an unauthenticated attacker to access certain restricted resources.",
    requiredAction: "Apply mitigations per vendor instructions.",
    dueDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  },
  {
    cveID: "CVE-2023-48788",
    vendorProject: "Fortinet",
    product: "FortiClient EMS",
    vulnerabilityName: "Fortinet FortiClient EMS SQL Injection Vulnerability",
    dateAdded: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    shortDescription: "Fortinet FortiClient EMS contains an SQL injection vulnerability that allows an unauthenticated attacker to execute unauthorized code or commands via specifically crafted requests.",
    requiredAction: "Apply mitigations per vendor instructions.",
    dueDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  },
  {
    cveID: "CVE-2024-1086",
    vendorProject: "Linux",
    product: "Kernel",
    vulnerabilityName: "Linux Kernel Use-After-Free Vulnerability",
    dateAdded: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    shortDescription: "The Linux kernel contains a use-after-free vulnerability in the netfilter component that allows a local attacker to escalate privileges.",
    requiredAction: "Apply mitigations per vendor instructions.",
    dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  },
  {
    cveID: "CVE-2023-27997",
    vendorProject: "Fortinet",
    product: "FortiOS",
    vulnerabilityName: "Fortinet FortiOS Heap-Based Buffer Overflow Vulnerability",
    dateAdded: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    shortDescription: "Fortinet FortiOS contains a heap-based buffer overflow vulnerability in the SSL VPN that allows an unauthenticated attacker to execute arbitrary code or commands.",
    requiredAction: "Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.",
    dueDate: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  },
  {
    cveID: "CVE-2024-20353",
    vendorProject: "Cisco",
    product: "ASA and FTD",
    vulnerabilityName: "Cisco ASA and FTD VPN Denial-of-Service Vulnerability",
    dateAdded: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    shortDescription: "Cisco Adaptive Security Appliance (ASA) and Firepower Threat Defense (FTD) contain a denial-of-service vulnerability in the VPN feature.",
    requiredAction: "Apply mitigations per vendor instructions.",
    dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  },
  {
    cveID: "CVE-2023-22518",
    vendorProject: "Atlassian",
    product: "Confluence Data Center and Server",
    vulnerabilityName: "Atlassian Confluence Improper Authorization Vulnerability",
    dateAdded: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    shortDescription: "Atlassian Confluence Data Center and Server contain an improper authorization vulnerability that allows an unauthenticated attacker to reset Confluence and create an administrator account.",
    requiredAction: "Apply mitigations per vendor instructions.",
    dueDate: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  },
  {
    cveID: "CVE-2024-4577",
    vendorProject: "PHP",
    product: "PHP",
    vulnerabilityName: "PHP CGI Argument Injection Vulnerability",
    dateAdded: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    shortDescription: "PHP contains an argument injection vulnerability in the CGI mode that allows an attacker to pass arguments to the PHP binary, potentially leading to remote code execution.",
    requiredAction: "Apply mitigations per vendor instructions.",
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  },
  {
    cveID: "CVE-2023-20273",
    vendorProject: "Cisco",
    product: "IOS XE",
    vulnerabilityName: "Cisco IOS XE Command Injection Vulnerability",
    dateAdded: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    shortDescription: "Cisco IOS XE contains a command injection vulnerability in the web UI that allows an authenticated, remote attacker to execute arbitrary commands with root privileges.",
    requiredAction: "Apply mitigations per vendor instructions.",
    dueDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  },
  {
    cveID: "CVE-2024-23897",
    vendorProject: "Jenkins",
    product: "Jenkins",
    vulnerabilityName: "Jenkins Arbitrary File Read Vulnerability",
    dateAdded: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    shortDescription: "Jenkins contains an arbitrary file read vulnerability in the built-in CLI that allows attackers to read arbitrary files on the Jenkins controller file system.",
    requiredAction: "Apply mitigations per vendor instructions.",
    dueDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  }
];

async function fetchThreatFeed() {
  const container = document.getElementById('threat-feed-container');
  const lastUpdateEl = document.getElementById('feed-last-update');

  try {
    let response = await fetch(CISA_KEV_API);
    
    if (!response.ok) {
      response = await fetch(CORS_PROXY + encodeURIComponent(CISA_KEV_API));
    }
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const vulnerabilities = data.vulnerabilities || [];
    
    const latestThreats = vulnerabilities
      .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
      .slice(0, 15);

    displayThreats(latestThreats, container);
    
    const now = new Date();
    lastUpdateEl.textContent = `Updated: ${now.toLocaleTimeString()}`;
    lastUpdateEl.style.color = 'var(--green)';

  } catch (error) {
    console.error('Error fetching threat feed, using mock data:', error);
    
    displayThreats(MOCK_THREATS, container);
    
    const now = new Date();
    lastUpdateEl.textContent = `Updated: ${now.toLocaleTimeString()} (Demo Mode)`;
    lastUpdateEl.style.color = 'var(--warning)';
  }
}

function displayThreats(threats, container) {
  if (!threats || threats.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
        <div style="font-size: 2rem; margin-bottom: 1rem;">📭</div>
        <div>No recent threats found</div>
      </div>
    `;
    return;
  }

  container.innerHTML = threats.map(threat => {
    const dateAdded = new Date(threat.dateAdded);
    const daysAgo = Math.floor((Date.now() - dateAdded) / (1000 * 60 * 60 * 24));
    const isRecent = daysAgo <= 7;

    const severityBadge = isRecent 
      ? '<span style="background: linear-gradient(135deg, #DC0046, #FF6B35); padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">🔴 Critical - New</span>'
      : '<span style="background: rgba(255, 107, 0, 0.2); color: #FF6B35; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">🟠 High</span>';

    return `
      <div style="background: linear-gradient(135deg, rgba(220, 0, 70, 0.05) 0%, rgba(0, 0, 0, 0.2) 100%); border: 1px solid ${isRecent ? 'rgba(220, 0, 70, 0.4)' : 'rgba(255, 107, 0, 0.3)'}; border-radius: 15px; padding: 1.5rem; transition: all 0.3s ease; ${isRecent ? 'box-shadow: 0 0 20px rgba(220, 0, 70, 0.2);' : ''}">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; flex-wrap: wrap; gap: 10px;">
          <div style="flex: 1; min-width: 200px;">
            <div style="font-size: 1.1rem; font-weight: 700; color: ${isRecent ? '#DC0046' : '#FF6B35'}; margin-bottom: 0.5rem;">
              ${threat.cveID}
            </div>
            <div style="font-size: 0.95rem; color: var(--text-light); line-height: 1.5;">
              ${threat.vulnerabilityName}
            </div>
          </div>
          <div style="text-align: right;">
            ${severityBadge}
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">
              ${daysAgo === 0 ? 'Today' : daysAgo === 1 ? 'Yesterday' : `${daysAgo} days ago`}
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.1);">
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.3rem;">VENDOR</div>
            <div style="font-size: 0.9rem; color: var(--text-light);">${threat.vendorProject || 'N/A'}</div>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.3rem;">PRODUCT</div>
            <div style="font-size: 0.9rem; color: var(--text-light);">${threat.product || 'N/A'}</div>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.3rem;">DATE ADDED</div>
            <div style="font-size: 0.9rem; color: var(--cyan);">${dateAdded.toLocaleDateString()}</div>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.3rem;">DUE DATE</div>
            <div style="font-size: 0.9rem; color: var(--warning);">${new Date(threat.dueDate).toLocaleDateString()}</div>
          </div>
        </div>

        ${threat.shortDescription ? `
          <div style="margin-top: 1rem; padding: 1rem; background: rgba(0, 0, 0, 0.3); border-radius: 10px; border-left: 3px solid ${isRecent ? '#DC0046' : '#FF6B35'};">
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.5rem; font-weight: 600;">DESCRIPTION</div>
            <div style="font-size: 0.88rem; color: var(--text-light); line-height: 1.6;">
              ${threat.shortDescription}
            </div>
          </div>
        ` : ''}

        ${threat.requiredAction ? `
          <div style="margin-top: 1rem; padding: 1rem; background: rgba(0, 229, 255, 0.05); border-radius: 10px; border-left: 3px solid var(--cyan);">
            <div style="font-size: 0.75rem; color: var(--cyan); margin-bottom: 0.5rem; font-weight: 600;">⚡ REQUIRED ACTION</div>
            <div style="font-size: 0.88rem; color: var(--text-light); line-height: 1.6;">
              ${threat.requiredAction}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

function initThreatFeed() {
  const refreshBtn = document.getElementById('refresh-feed');
  
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      refreshBtn.disabled = true;
      refreshBtn.innerHTML = '🔄 Refreshing...';
      
      fetchThreatFeed().finally(() => {
        refreshBtn.disabled = false;
        refreshBtn.innerHTML = '🔄 Refresh';
      });
    });
  }

  fetchThreatFeed();
  
  setInterval(fetchThreatFeed, REFRESH_INTERVAL);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThreatFeed);
} else {
  initThreatFeed();
}
