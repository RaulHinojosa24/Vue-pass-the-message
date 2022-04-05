Vue.createApp({
    data() {
        return {
            newMessage: "",
            lastMessage: "Hello world",
            errorVisible: false
        }
    },

    methods: {
        sendMessage() {
            if (!this.isNewMessageValid()) {
                this.showErrorMessage();
                return;
            }

            this.lastMessage = this.newMessage;
            this.newMessage = "";
        },

        isNewMessageValid() {
            return (this.newMessage.trim().length > 0) ? true : false;
        },

        showErrorMessage() {
            this.errorVisible = true;
            setTimeout(() => this.errorVisible = false, 3000);
        }
    }
}).mount("#app");