Vue.component('child-component', {
    template: `
        <div>
            <button @click="sendData">Kirim Data ke Parent</button>
        </div>
    `,
    methods: {
        sendData() {
            this.$emit('data-sent', 'Data dari Child Component');
        }
    }
});

Vue.component('middle-component', {
    template: `
        <div>
            <h3>Middle Component</h3>
            <child-component @data-sent="handleData"></child-component>
        </div>
    `,
    methods: {
        handleData(data) {
            this.$emit('data-sent', data);
        }
    }
});

Vue.component('parent-component', {
    template: `
        <div class="container">
            <header>
                <slot name="header"></slot>
            </header>
            <main>
                <h2>Parent Component</h2>
                <middle-component @data-sent="handleData"></middle-component>
                <p>{{ receivedData }}</p>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
    `,
    data() {
        return {
            receivedData: ''
        };
    },
    methods: {
        handleData(data) {
            this.receivedData = data;
        }
    }
});

new Vue({
    el: '#app'
});
