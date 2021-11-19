var app = new Vue(
    {
        el: "#container",
        data: {

            inChat: 0,

            newMsg: "",

            searchContact: "",

            contatti: [
                {
                    name: "Michele",
                    avatar: "img/avatar_1.jpg",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Hai portato a spasso il cane?",
                            status: "sent",
                            visible: false,
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Ricordati di dargli da mangiare",
                            status: "sent",
                            visible: false,
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            text: "Tutto fatto!",
                            status: "received",
                            visible: false,
                        }
                    ]
                },
                {
                    name: "Fabio",
                    avatar: "img/avatar_2.jpg",
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            text: "Ciao come stai?",
                            status: "sent",
                            visible: false,

                        },
                        {
                            date: "20/03/2020 16:30:55",
                            text: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                            visible: false,
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            text: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "sent",
                            visible: false,
                        }
                    ]
                },
                {
                    name: "Samuele",
                    avatar: "img/avatar_3.jpg",
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            text: "La Marianna va in campagna",
                            status: "received",
                            visible: false,
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            text: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                            visible: false,
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            text: "Ah scusa!",
                            status: "received",
                            visible: false,
                        }
                    ]
                },
                {
                    name: "Luisa",
                    avatar: "img/avatar_4.jpg",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                            visible: false,
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Si, ma preferirei andare al cinema",
                            status: "received",
                            visible: false,
                        }
                    ]
                }
            ]            
        },

        methods: {

            cambioChat(indice) {
                this.inChat = indice;
            },

            writeMsg(){
                if (this.newMsg.trim() !== "") {

                    let oggi = new Date();

                    let actualData = oggi.toLocaleDateString();
                    
                    let actualOra =  oggi.getHours() + ":" + oggi.getMinutes() + ":" + oggi.getSeconds();


                    const newUserMsg = {
                        date: `${actualData} ${actualOra}`,
                        text: this.newMsg,
                        status: "sent",
                        visible: false
                    };
                    
                    const newAnswerMsg = {
                        date: `${actualData} ${actualOra}`,
                        text: "ok",
                        status: "received",
                        visible: false
                    };

                    inChat2 = this.inChat

                    this.contatti[inChat2].messages.push(newUserMsg);

                    this.newMsg = "";

                    setTimeout(() => {
                        this.contatti[inChat2].messages.push(newAnswerMsg)
                    }, 1000);
                }
            },
            showMsgMenu(i) {
                // if(!this.$refs.msgSettings[i].className.includes("show-settings")) {
                //     this.$refs.msgSettings[i].classList.add("show-settings")
                // } else {
                //     this.$refs.msgSettings[i].classList.remove("show-settings")
                // }  
                           
                if(this.contatti[this.inChat].messages[i].visible == false) {
                    this.contatti[this.inChat].messages[i].visible = true;
                } else {
                    this.contatti[this.inChat].messages[i].visible = false
                }
            },
            deleteMsg(i) {
                this.contatti[this.inChat].messages.splice(i, 1);
            }
        }             
    }
)


