const API = {
    baseURL: window.location.origin,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    },

    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            method: options.method || 'GET',
            headers: {
                ...this.headers,
                ...options.headers
            },
            ...options
        };

        if (options.body && typeof options.body === 'object') {
            config.body = JSON.stringify(options.body);
        }

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), this.timeout);

            const response = await fetch(url, {
                ...config,
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API Request Error:', error);
            throw error;
        }
    },

    async get(endpoint, options = {}) {
        return this.request(endpoint, { ...options, method: 'GET' });
    },

    async post(endpoint, data, options = {}) {
        return this.request(endpoint, { ...options, method: 'POST', body: data });
    },

    async put(endpoint, data, options = {}) {
        return this.request(endpoint, { ...options, method: 'PUT', body: data });
    },

    async delete(endpoint, options = {}) {
        return this.request(endpoint, { ...options, method: 'DELETE' });
    },

    async fetchWithAnimation(endpoint, element, options = {}) {
        try {
            element.style.opacity = '0.6';
            element.style.pointerEvents = 'none';

            const data = await this.get(endpoint, options);

            await new Promise(resolve => setTimeout(resolve, 300));
            
            element.style.opacity = '1';
            element.style.pointerEvents = 'auto';

            return data;
        } catch (error) {
            element.style.opacity = '1';
            element.style.pointerEvents = 'auto';
            throw error;
        }
    },

    async fetchJSON(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
            return await response.json();
        } catch (error) {
            console.error('JSON Fetch Error:', error);
            throw error;
        }
    },

    setHeader(key, value) {
        this.headers[key] = value;
    },

    removeHeader(key) {
        delete this.headers[key];
    },

    setTimeout(ms) {
        this.timeout = ms;
    }
};

window.API = API;

const AnimatedFetch = {
    async load(url, targetElement, animationType = 'fadeIn') {
        const element = document.querySelector(targetElement);
        if (!element) {
            console.warn(`Element ${targetElement} not found`);
            return null;
        }

        try {
            element.style.opacity = '0';
            element.style.transition = 'opacity 0.3s ease-out';

            const data = await fetch(url).then(r => r.json());

            await new Promise(resolve => setTimeout(resolve, 300));
            
            element.style.opacity = '1';
            element.innerHTML = '';
            return data;
        } catch (error) {
            console.error('Animated Fetch Error:', error);
            element.style.opacity = '1';
            throw error;
        }
    },

    async loadHTML(url, targetElement) {
        const element = document.querySelector(targetElement);
        if (!element) {
            console.warn(`Element ${targetElement} not found`);
            return;
        }

        try {
            element.style.opacity = '0';
            element.style.transition = 'opacity 0.3s ease-out';

            const html = await fetch(url).then(r => r.text());

            await new Promise(resolve => setTimeout(resolve, 300));
            
            element.innerHTML = html;
            element.style.opacity = '1';
        } catch (error) {
            console.error('HTML Load Error:', error);
            element.style.opacity = '1';
            throw error;
        }
    }
};

window.AnimatedFetch = AnimatedFetch;

const APICache = {
    cache: new Map(),
    ttl: 5 * 60 * 1000,

    set(key, value, customTTL = null) {
        this.cache.set(key, {
            data: value,
            timestamp: Date.now(),
            ttl: customTTL || this.ttl
        });
    },

    get(key) {
        const item = this.cache.get(key);
        if (!item) return null;

        if (Date.now() - item.timestamp > item.ttl) {
            this.cache.delete(key);
            return null;
        }

        return item.data;
    },

    clear() {
        this.cache.clear();
    },

    remove(key) {
        this.cache.delete(key);
    },

    setTTL(ttlMs) {
        this.ttl = ttlMs;
    }
};

window.APICache = APICache;

const EventEmitter = {
    events: {},

    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    },

    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    },

    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    },

    clear(event) {
        if (event) {
            delete this.events[event];
        } else {
            this.events = {};
        }
    }
};

window.EventEmitter = EventEmitter;
