var app = new Vue(
    {
        el: "#container",
        data: {

            inChat: 0,

            newMsg: "",

            contatti: [
                {
                    name: "Michele",
                    avatar: "img/avatar_1.jpg",
                    visible: false,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Hai portato a spasso il cane?",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Ricordati di dargli da mangiare",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            text: "Tutto fatto!",
                            status: "received"
                        }
                    ]
                },
                {
                    name: "Fabio",
                    avatar: "img/avatar_2.jpg",
                    visible: false,
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            text: "Ciao come stai?",
                            status: "sent"
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            text: "Bene grazie! Stasera ci vediamo?",
                            status: "received"
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            text: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "sent"
                        }
                    ]
                },
                {
                    name: "Samuele",
                    avatar: "img/avatar_3.jpg",
                    visible: false,
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            text: "La Marianna va in campagna",
                            status: "received"
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            text: "Sicuro di non aver sbagliato chat?",
                            status: "sent"
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            text: "Ah scusa!",
                            status: "received"
                        }
                    ]
                },
                {
                    name: "Luisa",
                    avatar: "img/avatar_4.jpg",
                    visible: false,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Si, ma preferirei andare al cinema",
                            status: "received"
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
                        status: "sent"
                    };
                    
                    const newAnswerMsg = {
                        date: `${actualData} ${actualOra}`,
                        text: "ok",
                        status: "received"
                    };

                    inChat2 = this.inChat

                    this.contatti[inChat2].messages.push(newUserMsg);

                    this.newMsg = "";

                    setTimeout(() => {
                        this.contatti[inChat2].messages.push(newAnswerMsg)
                    }, 1000);
                }
            }
        }            
    }      

)


