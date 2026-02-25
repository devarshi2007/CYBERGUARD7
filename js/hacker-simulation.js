class HackerSimulation {
    constructor() {
        this.systemComponents = {
            database: { health: 100, status: 'secure', vulnerabilities: ['SQL Injection', 'Weak Encryption'] },
            webserver: { health: 100, status: 'secure', vulnerabilities: ['XSS', 'CSRF', 'Directory Traversal'] },
            authentication: { health: 100, status: 'secure', vulnerabilities: ['Weak Passwords', 'Session Hijacking'] },
            firewall: { health: 100, status: 'secure', vulnerabilities: ['Misconfiguration', 'Outdated Rules'] },
            api: { health: 100, status: 'secure', vulnerabilities: ['Broken Authentication', 'Rate Limiting'] },
            userdata: { health: 100, status: 'secure', vulnerabilities: ['Data Exposure', 'Improper Access Control'] }
        };

        this.hackerStats = {
            blackhat: {
                attacks: 0,
                compromised: 0,
                dataStolen: 0
            },
            whitehat: {
                tests: 0,
                vulnsFound: 0,
                secured: 0
            },
            greyhat: {
                probes: 0,
                vulnsFound: 0,
                reported: 0
            }
        };

        this.simulationRunning = false;
        this.init();
    }

    init() {
        document.getElementById('resetBtn').addEventListener('click', () => this.reset());
        document.getElementById('runAllBtn').addEventListener('click', () => this.runAllSimulations());
        
        document.querySelectorAll('.simulate-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const type = e.target.dataset.type;
                this.runSimulation(type);
            });
        });
    }

    reset() {
        Object.keys(this.systemComponents).forEach(component => {
            this.systemComponents[component].health = 100;
            this.systemComponents[component].status = 'secure';
            this.updateComponentUI(component);
        });

        this.hackerStats = {
            blackhat: { attacks: 0, compromised: 0, dataStolen: 0 },
            whitehat: { tests: 0, vulnsFound: 0, secured: 0 },
            greyhat: { probes: 0, vulnsFound: 0, reported: 0 }
        };

        this.updateAllStats();
        this.clearAllLogs();
        
        document.getElementById('results-container').innerHTML = 
            '<p class="placeholder">Run simulations to see detailed comparison results</p>';
    }

    clearAllLogs() {
        document.getElementById('blackhat-log').innerHTML = '';
        document.getElementById('whitehat-log').innerHTML = '';
        document.getElementById('greyhat-log').innerHTML = '';
    }

    async runAllSimulations() {
        if (this.simulationRunning) return;
        
        this.reset();
        this.simulationRunning = true;
        
        await this.sleep(500);
        await this.runSimulation('blackhat');
        await this.sleep(1000);
        await this.runSimulation('whitehat');
        await this.sleep(1000);
        await this.runSimulation('greyhat');
        
        this.simulationRunning = false;
        this.generateComparison();
    }

    async runSimulation(type) {
        switch(type) {
            case 'blackhat':
                await this.simulateBlackHat();
                break;
            case 'whitehat':
                await this.simulateWhiteHat();
                break;
            case 'greyhat':
                await this.simulateGreyHat();
                break;
        }
    }

    async simulateBlackHat() {
        this.log('blackhat', 'info', '🎯 Initiating unauthorized attack sequence...');
        await this.sleep(300);

        const components = Object.keys(this.systemComponents);
        
        for (let i = 0; i < 5; i++) {
            this.hackerStats.blackhat.attacks++;
            this.updateStats('blackhat');
            
            const targetComponent = components[Math.floor(Math.random() * components.length)];
            const vuln = this.systemComponents[targetComponent].vulnerabilities[
                Math.floor(Math.random() * this.systemComponents[targetComponent].vulnerabilities.length)
            ];

            this.log('blackhat', 'warning', `⚡ Attempting ${vuln} attack on ${targetComponent}...`);
            await this.sleep(500);

            if (Math.random() > 0.3) {
                this.log('blackhat', 'success', `✓ Successfully exploited ${targetComponent} via ${vuln}`);
                this.hackerStats.blackhat.compromised++;
                
                this.systemComponents[targetComponent].health -= 30;
                this.systemComponents[targetComponent].status = 'compromised';
                this.updateComponentUI(targetComponent);

                const stolen = Math.floor(Math.random() * 500) + 100;
                this.hackerStats.blackhat.dataStolen += stolen;
                
                this.log('blackhat', 'success', `💰 Extracted ${stolen}MB of sensitive data`);
                await this.sleep(400);
                
                this.log('blackhat', 'error', `🔥 Installing backdoor and covering tracks...`);
                await this.sleep(300);
                
            } else {
                this.log('blackhat', 'error', `✗ Attack blocked by security measures`);
            }
            
            this.updateStats('blackhat');
            await this.sleep(600);
        }

        this.log('blackhat', 'error', '⚠️ Attack session complete. System compromised.');
    }

    async simulateWhiteHat() {
        this.log('whitehat', 'info', '🔍 Starting authorized security assessment...');
        await this.sleep(300);

        const components = Object.keys(this.systemComponents);
        
        for (let component of components) {
            this.hackerStats.whitehat.tests++;
            this.updateStats('whitehat');
            
            this.log('whitehat', 'info', `📋 Scanning ${component} for vulnerabilities...`);
            await this.sleep(400);

            const vulns = this.systemComponents[component].vulnerabilities;
            
            if (this.systemComponents[component].status === 'compromised') {
                this.log('whitehat', 'warning', `⚠️ CRITICAL: ${component} shows signs of compromise!`);
                this.hackerStats.whitehat.vulnsFound += vulns.length;
                await this.sleep(300);
                
                for (let vuln of vulns) {
                    this.log('whitehat', 'warning', `  └─ Vulnerability found: ${vuln}`);
                    await this.sleep(200);
                }
                
                this.log('whitehat', 'success', `🔧 Applying security patches to ${component}...`);
                await this.sleep(500);
                
                this.systemComponents[component].health = Math.min(100, this.systemComponents[component].health + 50);
                this.systemComponents[component].status = 'patched';
                this.updateComponentUI(component);
                this.hackerStats.whitehat.secured++;
                
                this.log('whitehat', 'success', `✓ ${component} secured and hardened`);
            } else {
                const foundVulns = Math.floor(Math.random() * 2) + 1;
                this.hackerStats.whitehat.vulnsFound += foundVulns;
                
                this.log('whitehat', 'warning', `Found ${foundVulns} potential vulnerabilities in ${component}`);
                await this.sleep(300);
                
                this.log('whitehat', 'success', `✓ Recommendations documented for ${component}`);
            }
            
            this.updateStats('whitehat');
            await this.sleep(500);
        }

        this.log('whitehat', 'success', '✅ Security assessment complete. Report generated.');
    }

    async simulateGreyHat() {
        this.log('greyhat', 'info', '🔎 Initiating unauthorized security probe...');
        await this.sleep(300);

        const components = Object.keys(this.systemComponents);
        
        for (let i = 0; i < 4; i++) {
            this.hackerStats.greyhat.probes++;
            this.updateStats('greyhat');
            
            const targetComponent = components[Math.floor(Math.random() * components.length)];
            
            this.log('greyhat', 'warning', `🔍 Probing ${targetComponent} without authorization...`);
            await this.sleep(400);

            if (Math.random() > 0.4) {
                const vuln = this.systemComponents[targetComponent].vulnerabilities[
                    Math.floor(Math.random() * this.systemComponents[targetComponent].vulnerabilities.length)
                ];
                
                this.log('greyhat', 'warning', `⚠️ Discovered ${vuln} vulnerability in ${targetComponent}`);
                this.hackerStats.greyhat.vulnsFound++;
                await this.sleep(400);
                
                if (Math.random() > 0.3) {
                    this.log('greyhat', 'success', `📧 Anonymously notifying admin about ${vuln}...`);
                    this.hackerStats.greyhat.reported++;
                    
                    if (this.systemComponents[targetComponent].status !== 'patched') {
                        this.systemComponents[targetComponent].status = 'vulnerable';
                        this.updateComponentUI(targetComponent);
                    }
                } else {
                    this.log('greyhat', 'error', `🤐 Keeping vulnerability information private for now...`);
                }
            } else {
                this.log('greyhat', 'info', `✓ ${targetComponent} appears secure from initial scan`);
            }
            
            this.updateStats('greyhat');
            await this.sleep(600);
        }

        this.log('greyhat', 'info', '⚖️ Probe complete. Some findings shared, some kept private.');
    }

    log(type, level, message) {
        const logElement = document.getElementById(`${type}-log`);
        const entry = document.createElement('div');
        entry.className = `log-entry ${level}`;
        const timestamp = new Date().toLocaleTimeString();
        entry.textContent = `[${timestamp}] ${message}`;
        logElement.appendChild(entry);
        logElement.scrollTop = logElement.scrollHeight;
    }

    updateComponentUI(componentName) {
        const component = document.querySelector(`.system-component[data-component="${componentName}"]`);
        const status = this.systemComponents[componentName].status;
        const health = this.systemComponents[componentName].health;

        const statusElement = component.querySelector('.component-status');
        statusElement.textContent = status.charAt(0).toUpperCase() + status.slice(1);
        statusElement.setAttribute('data-status', status);
        component.setAttribute('data-status', status);

        const healthFill = component.querySelector('.health-fill');
        healthFill.style.width = `${health}%`;
        
        if (health < 30) {
            healthFill.style.background = 'linear-gradient(90deg, #ff0844, #ff4500)';
        } else if (health < 70) {
            healthFill.style.background = 'linear-gradient(90deg, #f7971e, #ffd200)';
        } else {
            healthFill.style.background = 'linear-gradient(90deg, #56ab2f, #a8e063)';
        }
    }

    updateStats(type) {
        if (type === 'blackhat') {
            document.getElementById('blackhat-attacks').textContent = this.hackerStats.blackhat.attacks;
            document.getElementById('blackhat-compromised').textContent = this.hackerStats.blackhat.compromised;
            document.getElementById('blackhat-data').textContent = `${this.hackerStats.blackhat.dataStolen} MB`;
        } else if (type === 'whitehat') {
            document.getElementById('whitehat-tests').textContent = this.hackerStats.whitehat.tests;
            document.getElementById('whitehat-vulns').textContent = this.hackerStats.whitehat.vulnsFound;
            document.getElementById('whitehat-secured').textContent = this.hackerStats.whitehat.secured;
        } else if (type === 'greyhat') {
            document.getElementById('greyhat-probes').textContent = this.hackerStats.greyhat.probes;
            document.getElementById('greyhat-vulns').textContent = this.hackerStats.greyhat.vulnsFound;
            document.getElementById('greyhat-reported').textContent = this.hackerStats.greyhat.reported;
        }
    }

    updateAllStats() {
        this.updateStats('blackhat');
        this.updateStats('whitehat');
        this.updateStats('greyhat');
    }

    generateComparison() {
        const resultsContainer = document.getElementById('results-container');
        
        const totalSystemHealth = Object.values(this.systemComponents)
            .reduce((sum, comp) => sum + comp.health, 0) / Object.keys(this.systemComponents).length;

        const html = `
            <table class="results-table">
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th>Black Hat</th>
                        <th>White Hat</th>
                        <th>Grey Hat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Primary Goal</strong></td>
                        <td>Exploit & Profit</td>
                        <td>Secure & Protect</td>
                        <td>Discover & Maybe Report</td>
                    </tr>
                    <tr>
                        <td><strong>Authorization</strong></td>
                        <td style="color: #ff0844;">❌ None</td>
                        <td style="color: #4CAF50;">✅ Full</td>
                        <td style="color: #ffd200;">⚠️ None</td>
                    </tr>
                    <tr>
                        <td><strong>Actions Taken</strong></td>
                        <td>${this.hackerStats.blackhat.attacks} attacks</td>
                        <td>${this.hackerStats.whitehat.tests} tests</td>
                        <td>${this.hackerStats.greyhat.probes} probes</td>
                    </tr>
                    <tr>
                        <td><strong>Systems Affected</strong></td>
                        <td style="color: #ff0844;">${this.hackerStats.blackhat.compromised} compromised</td>
                        <td style="color: #4CAF50;">${this.hackerStats.whitehat.secured} secured</td>
                        <td>${this.hackerStats.greyhat.vulnsFound} vulnerabilities found</td>
                    </tr>
                    <tr>
                        <td><strong>Data Impact</strong></td>
                        <td style="color: #ff0844;">${this.hackerStats.blackhat.dataStolen}MB stolen</td>
                        <td style="color: #4CAF50;">0MB stolen (protected)</td>
                        <td>${this.hackerStats.greyhat.reported} issues reported</td>
                    </tr>
                    <tr>
                        <td><strong>Legal Consequences</strong></td>
                        <td style="color: #ff0844;">Criminal charges, fines, imprisonment</td>
                        <td style="color: #4CAF50;">None (authorized activity)</td>
                        <td style="color: #ffd200;">Potential charges if caught</td>
                    </tr>
                    <tr>
                        <td><strong>Impact on Security</strong></td>
                        <td>
                            <div class="impact-meter">
                                <div class="impact-bar">
                                    <div class="impact-fill high" style="width: ${this.hackerStats.blackhat.compromised * 20}%"></div>
                                </div>
                                <span>Negative</span>
                            </div>
                        </td>
                        <td>
                            <div class="impact-meter">
                                <div class="impact-bar">
                                    <div class="impact-fill low" style="width: ${this.hackerStats.whitehat.secured * 20}%"></div>
                                </div>
                                <span>Positive</span>
                            </div>
                        </td>
                        <td>
                            <div class="impact-meter">
                                <div class="impact-bar">
                                    <div class="impact-fill medium" style="width: ${(this.hackerStats.greyhat.reported / this.hackerStats.greyhat.vulnsFound * 100) || 0}%"></div>
                                </div>
                                <span>Mixed</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <div style="margin-top: 30px; padding: 20px; background: rgba(0,0,0,0.3); border-radius: 10px;">
                <h3 style="color: #00d4ff; margin-bottom: 15px;">📊 Overall System Health: ${totalSystemHealth.toFixed(1)}%</h3>
                <div class="health-bar" style="height: 20px; margin-bottom: 20px;">
                    <div class="health-fill" style="width: ${totalSystemHealth}%"></div>
                </div>
                
                <h3 style="color: #00d4ff; margin-bottom: 15px;">🎓 Key Takeaways:</h3>
                <ul style="line-height: 2; margin-left: 20px;">
                    <li><strong>Black Hat Hackers:</strong> Caused ${this.hackerStats.blackhat.compromised} system compromises and stole ${this.hackerStats.blackhat.dataStolen}MB of data. Their actions are illegal and harmful.</li>
                    <li><strong>White Hat Hackers:</strong> Conducted ${this.hackerStats.whitehat.tests} authorized tests, found ${this.hackerStats.whitehat.vulnsFound} vulnerabilities, and secured ${this.hackerStats.whitehat.secured} systems. Their work improves security.</li>
                    <li><strong>Grey Hat Hackers:</strong> Performed ${this.hackerStats.greyhat.probes} unauthorized probes, found ${this.hackerStats.greyhat.vulnsFound} vulnerabilities, and reported ${this.hackerStats.greyhat.reported} issues. While intentions may be good, their methods are questionable and potentially illegal.</li>
                </ul>
                
                <div style="margin-top: 20px; padding: 15px; background: rgba(255, 208, 0, 0.1); border-left: 4px solid #ffd200; border-radius: 5px;">
                    <strong>⚠️ Important Note:</strong> This simulation is for educational purposes only. Always obtain proper authorization before conducting any security testing. Unauthorized access to computer systems is illegal.
                </div>
            </div>
        `;

        resultsContainer.innerHTML = html;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new HackerSimulation();
});
