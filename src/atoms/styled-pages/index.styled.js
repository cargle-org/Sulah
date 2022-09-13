import styled from "styled-components";
import redBg from '../../assets/images/red-hero-bg.png'
import greenBg from '../../assets/images/green-hero-bg.png'
import redAboutBg from '../../assets/images/red-about-bg.png'
import greenAboutBg from '../../assets/images/green-about-bg.png'
import greenBG from '../../assets/images/greenBg.png'

export const LandingPage = styled.div`
    // padding: 2rem 4rem;
    position: relative;
    font-family: 'Montserrat', sans-serif;
`

export const HeroStyles =styled.section`
width: 100%;
height: 620px;
padding: 2rem 6rem;
font-family: 'Montserrat', sans-serif;
margin: 0 auto;
position: relative;
 &.light{
    background: url(${redBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
 }
 &.dark{
    background: url(${greenBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
 }
    .hero-wrapper{
        width: 100%;
        max-width: 1300px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        margin: 0 auto;
        .hero-left{
            width: 50%;
            .hl-logo{
                display: flex;
                align-items: center;
                img{
                    width: 60px;
                }
                .brand-name{
                    font-weight: 700;
                    font-size:  1.8rem;
                    margin-left: .5rem;
                }
            }
            .hl-heading{
                font-size: 2.7rem;
                font-weight: 700;
                margin: 2rem 0;
                line-height: 1.2;
            }
            .hl-flags{
                display: grid;
                align-items: center;
                grid-template-columns: auto auto auto auto auto auto auto;
                width: 70%;
                margin: 2rem 0;
                .flag{
                    border-radius: 50%;
                    border: 2px solid #E0999F;
                    width: 45px;
                    height: 45px;
                    overflow: hidden;
                    cursor: pointer;
                    &:hover{
                        img{
                            transform: scale(1.6);
                        }
                    }
                    img{
                        transform: scale(1.1);
                        transition: all 250ms ease-in;
                    }
                }
                .arrows{
                    background-color: #E04447;
                    height: 33px;
                    width:55px;
                    border-radius: 100px;
                    display: flex;
                    img{
                        width: 30px;
                        margin: 0 auto;
                    }
                }
                .arrows-dark{
                    background-color: #A1272E;
                    height: 33px;
                    width:55px;
                    border-radius: 100px;
                    display: flex;
                    img{
                        width: 30px;
                        margin: 0 auto;
                    }
                }
            }
            .hl-buttons{
                display: flex;
                margin: 2rem 0;
                button{
                    display: flex;
                    align-items: center;
                    border-radius: 50px;
                    padding: .6rem 1.5rem;
                        font-weight: 500;
                        font-size: .9rem;
                        letter-spacing: 1.2px;
                        svg{
                            width: 12px;
                            height: 12px;
                            margin-left: .5rem;
                        }
                        &.light-btn{
                            background-color: #12613F;
                            color: white;
                        }
                        &.dark-btn{
                            background-color: white;
                            color: #A1272E;
                            svg{
                                path{
                                    fill: #A1272E;
                                }
                            }
                        }
                }
                .default-light-btn{
                    background-color: white;
                    color: black;
                    border: 1px solid #12613F;
                    box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.05);
                    margin-left: 1rem;
                    svg{
                        path{
                            fill: black;
                        }
                    }
                }
                .default-dark-btn{
                    background-color: #A1272E;
                    color: white;
                    border: 1px solid white;
                    box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.05);
                    margin-left: 1rem;
                    svg{
                        path{
                            fill: white;
                        }
                    }
                }
            }
        }
        .hero-right{
            width: 50%;
           img{
            margin: 3rem 0 0 3rem;
            width: 520px;
           }
        }
    }
    @media (min-width: 1300px){
        height: 700px;
    }
    .hero-card-wrapper{
        position: absolute;
        bottom:-30px;
        left: 0;
        right: 0;
        width: 100%;
        .hero-card{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            width: 65%;
            max-width: 1000px;
            margin: 0 auto;
            padding: 1.2rem 2rem;
            background: #FFFFFF;
            border: 1px solid #DEE6E2;
            border-radius: 100px;
            div{
                display: flex;
                align-items: center;
                font-size: .8rem;
                font-weight: 500;
                color: black;
                margin: .5rem;
                img{
                    margin-right: .5rem;
                    
                }
            }
        }
    }
    @media (min-width: 1700px){
        &.light{
            background: url(${redBg});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
         }
         &.dark{
            background: url(${greenBg});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
         }
        }
         
    @media (max-width: 1200px){
        .hero-card-wrapper{
            .hero-card{
                width: 75%;
            }
        }
    }
    @media (max-width: 1100px){
        padding: 2rem 4rem;
        height: 700px;
        .hero-wrapper{
            .hero-left{
                .hl-logo{
                    img{
                        width: 40px;
                    }
                    .brand-name{
                        font-size: 1.4rem;
                    }
                }
                .hl-heading{
                font-size: 2.5rem;
                }
                .hl-buttons{
                    button{
                        font-size: .7rem;
                    }
                }
            }
        }
        .hero-card-wrapper{
            .hero-card{
                width: 85%;
            }
        }
    }

    @media (max-width: 990px){
        padding: 2rem;
        .hero-wrapper{
            .hero-left{
                .hl-heading{
                    font-size: 2.2rem;
                    width: 90%;
                }
            }
            .hero-right{
                img{
                    margin: 3rem 0 0 0;
                }
            }
        }
        .hero-card-wrapper{
            bottom:-50px;
            .hero-card{
                padding: .5rem;
               width: 60%;
            }
        }
    }

    @media (max-width: 790px){
        .hero-wrapper{
            .hero-left{
                .hl-heading{
                    font-size: 2rem;
                    width: 90%;
                }
            }
        }
    }

    @media (max-width: 720px){
        .hero-wrapper{
            .hero-left{
                width: 80%;
                text-align: center;
                margin: 0 auto;
                .hl-logo{
                    width: fit-content;
                    margin: 0 auto;
                }
                .hl-heading{
                    font-size: 2.5rem;
                    width: 100%;
                }
                .hl-flags{
                    margin: 2rem auto;
                    width: 80%;
                }
                .hl-buttons{
                    margin: 2rem auto;
                    width: fit-content;
                }
            }
            .hero-right{
                display: none;
            }
        }
        .hero-card-wrapper{
            .hero-card{
               width: 80%;
            }
        }
    }

    @media (max-width: 560px){
        .hero-wrapper{
            .hero-left{
                width: 90%;
                .hl-heading{
                    font-size: 2.5rem;
                    width: 100%;
                }
                .hl-flags{
                    margin: 2rem auto;
                    width: fit-content;
                }
                .hl-buttons{
                    margin: 2rem auto;
                    width: fit-content;
                    align-items: center;
                    justify-content: center;
                }
            }
            .hero-right{
                display: none;
            }
        }
        .hero-card-wrapper{
            bottom:-45px;
            .hero-card{
               width: 95%;
               
            }
        }
    }

    @media (max-width: 420px){
        padding:2rem 1rem;
        .hero-wrapper{
            .hero-left{
                width: 100%;
                .hl-heading{
                    font-size: 2rem;
                }
                .hl-flags{
                    .flag{
                        width: 40px;
                        height: 40px;
                    }
                }
                .hl-buttons{
                    width: 100%;
                    flex-wrap: wrap;
                    button{
                        margin-top: 1rem;
                    }
                    .default-dark-btn{
                        margin-left: 0;
                    }
                }
            }
            .hero-right{
                display: none;
            }
        }
        .hero-card-wrapper{
            bottom:-45px;
            .hero-card{
               width: 95%;
                border-radius: 30px;
                div{
                    align-items: start;
                    p{
                        text-align: center;
                    }
                }
            }
        }
    }
    @media (max-width: 320px){
        .hero-wrapper{
          .hero-left{
            .hl-heading{
                font-size: 1.8rem;
            }
            .hl-flags{
                width: 100%;
                overflow-x: auto;
                .flag{
                    width: 35px;
                    height: 35px;
                }
            }
            }
            }
    }
`

export const RatesStyles = styled.section`
padding: 10rem 6rem;
background-color: #EBEBEB;
margin: 0 auto;
border-bottom: 2px solid #F2E0E1;
.rates-wrapper{
    width: 100%;
    h2{
        text-align: center;
        width: fit-content;
        padding: .3rem 2rem;
        font-size: 1.8rem;
        font-weight: 700;
        background-color: white;
        border-radius: 133.627px;
        margin: 0 auto;
        color: black;
    }
    .rates-card{
        width: 60%;
        max-width: 700px;
        margin: 0 auto;
        background-color: white;
        padding: .5rem 0;
        border-radius: 20px;
        border: 1.1px solid #DEE6E2;
        color: black;
        // hr{
        //   border: 1px solid #DEE6E2;
        //   width: 100%;
        // }
        .card-heading{
            background-color: #F7FAFF;
            padding: .2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            // max-width: 50%;
            width: fit-content;
            margin: 1rem auto;
            border-radius: 10px;
            cursor: pointer;
            border: 1.14863px solid #EFEFEF;
            h2{
                font-size: .8rem;
                padding: .5rem 2rem;
                background-color: transparent;
                border-radius: 10px;
                
            }
            .brand-rates{
                border: 1.14863px solid #EFEFEF;
                background-color: white;
                box-shadow: 0px 4.59453px 17.2295px 6.8918px rgba(0, 0, 0, 0.05);
            }
        }

        table{
            width: 100%;
            font-weight: 500;
            color: #112A3F;
            thead{
                background-color: #F3F3F3;
                
                tr{
                    .currency{
                        width: 60%;
                        padding-left: 3rem;
                    }
                    th{
                        width: 20%;
                        text-align: left;
                        padding: .5rem 0;
                        font-weight: 500;
                    }
                }
            }
            tbody{
                tr:not(:last-child){
                    border-bottom: 1px solid #DEE6E2;
                }
                tr{
                    .currency-row{
                        padding-left: 3rem;
                        padding-right: 2rem;
                        display: flex;
                        align-items: center;
                        &:hover{
                            .flag{
                                img{
                                    transform: scale(1.6);
                                }
                            }
                        }
                        .flag{
                            border-radius: 50%;
                            border: 2px solid #E0999F;
                            width: 35px;
                            height: 35px;
                            overflow: hidden;
                            margin-right: .5rem;
                            display: flex;
                            align-item: center;
                            justify-content: center;
                            &:hover{
                                img{
                                    transform: scale(1.6);
                                }
                            }
                            img{
                                transform: scale(1.1);
                                transition: all 250ms ease-in;
                            }
                        }
                    }
                    td{
                        padding: 1rem 0;
                    }
                }
            }
        }
       
        .cbn-rates{
            height: 40vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            h1{
                font-size: 2rem;
                font-weight: 700;
                text-transform: uppercase;
            }
        }
    }
    .updated-time{
        display: flex;
        color: black;
        width: fit-content;
        margin: 0 auto;
        padding: .5rem 1rem;
        border-radius: 20px;
        border: 1.1px solid #DEE6E2;
        background-color: white;
        font-size: .8rem;
        img{
            margin-right: .5rem;
            width: 15px;
        }
    }
}
@media (max-width: 1100px){
    .rates-wrapper{
        .rates-card{
            width: 70%;
        }
    }
}
@media (max-width: 990px){
    padding: 10rem 3rem;
    .rates-wrapper{
        .rates-card{
            width: 85%;
        }
    }
}
@media (max-width: 768px){
    padding: 10rem 2rem;
    .rates-wrapper{
        .rates-card{
            width: 90%;
        }
    }
}
@media (max-width: 600px){
    padding: 10rem 1rem;
    .rates-wrapper{
        .rates-card{
            width: 100%;
            table{
                tbody{
                    tr{
                        .currency-row{
                            padding-left: 1rem;
                            padding-right:1rem;
                            p{
                                font-size: 1rem;
                            }
                            .flag{
                               width: 25px;
                               height: 25px;
                            }
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 420px){
    .rates-wrapper{
        h2{
            font-size: 1.5rem;
        }
        .rates-card{
            table{
                thead{
                    tr{
                        th{
                            font-size: .8rem;
                        }
                    }
                }
                tbody{
                    tr{
                        .currency-row{
                            p{
                                font-size: .8rem;
                            }
                            .flag{
                               width: 25px;
                               height: 25px;
                              
                            }
                        }
                        td{
                            font-size: .8rem
                        }
                    }
                }
            }
            .cbn-rates{
                h1{
                    font-size: 1rem;
                }
            }
        }
        .updated-time{
            font-size: .6rem;
            img{
                width: 10px;
            }
        }
    }
}
`

export const PartnerStyles = styled.section`
width: 100%;
background-color: #EBEBEB;
.partners-wrapper{
padding: 6rem;
 max-width: 1300px;
background-color: #EBEBEB;
margin: 0 auto;
border-bottom: 2px solid #F2E0E1;
color: black;
h1{
    font-size: 2.5rem;
    font-weight: 700;
    width: fit-content;
    background-color: white;
    border: 1px solid #F2E0E1;
    padding: .5rem 2.5rem;
    border-radius: 50px;
    margin: 0 auto;
}
.partners{
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;
}
}
@media (max-width: 990px){
    .partners-wrapper{
        padding: 6rem 3rem;
    }
}
@media (max-width: 768.98px){
  .partners-wrapper{
    .partners{
        grid-template-columns: auto auto auto;
        grid-gap: 3rem 0;
       }
  }
}
@media (max-width: 500.98px){
  .partners-wrapper{
    padding: 6rem 2rem;
    h1{
        font-size: 2rem;
    }
    .partners{
        grid-template-columns: auto auto;
        grid-gap: 3rem 1rem;
       }
  }
}
@media (max-width: 420px){
  .partners-wrapper{
    padding: 6rem 1rem;
    h1{
        font-size: 1.5rem;
    }
    .partners{
        grid-template-columns: auto auto;
        grid-gap: 4rem 1rem;
       }
  }
}
`

export const AboutStyles= styled.div`
 padding: 6rem 0;
 margin: 0 auto;
 height: fit-content;
 &.light{
    background: url(${greenAboutBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: black;
    h1{
        background-color: white;
    }
 }
 &.dark{
    background: url(${redAboutBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: white;
    h1{
        background-color: #D03C45;;
    }
 }
 h1{
    font-size: 2.5rem;
    font-weight: 700;
    width: fit-content;
    background-color: white;
    border: 1px solid #F2E0E1;
    padding: .5rem 2.5rem;
    border-radius: 50px;
    margin: 0 auto;
}
.about-content{
    margin: 2rem auto;
    width: 60%;
    text-align: center;
    p{
        width: 70%;
        margin: 1rem auto;
    }
    .about-content-heading{
        font-size: 1.5rem;
        font-weight: 600;
        margin: 1.5rem 0;
    }
    .about-button-group{
        width: fit-content;
            display: flex;
            margin: 3rem auto 0;
            button{
                display: flex;
                align-items: center;
                border-radius: 50px;
                padding: .6rem 1.5rem;
                    font-weight: 500;
                    font-size: .9rem;
                    letter-spacing: 1.2px;
                    svg{
                        width: 12px;
                        height: 12px;
                        margin-left: .5rem;
                    }
                    &.light-btn{
                        background-color: #12613F;
                        color: white;
                    }
                    &.dark-btn{
                        background-color: white;
                        color: #A1272E;
                        svg{
                            path{
                                fill: #A1272E;
                            }
                        }
                    }
            }
            .default-light-btn{
                background-color: white;
                color: black;
                border: 1px solid #12613F;
                box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.05);
                margin-left: 1rem;
            }
            .default-dark-btn{
                background-color: #A1272E;
                color: white;
                border: 1px solid white;
                box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.05);
                margin-left: 1rem;
                svg{
                    path{
                        fill: white;
                    }
                }
            }
        
    }
}

@media (max-width: 990px){
    .about-content{
        width: 70%;
    } 
}
@media (max-width: 560px){
    .about-content{
        width: 90%;
    } 
}
@media (max-width: 430px){
    padding:6rem 1rem;
    h1{
        font-size: 1.5rem;
    }
    .about-content{
        width: 100%;
        .about-button-group{
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            button{
                margin-bottom: 1rem;
            } 
            .default-dark-btn{
                margin-left: 0;
            }
        }
    } 
}
`

export const BenefitStyles = styled.section`
padding: 6rem;
margin: 0 auto;
height: fit-content;
&.light{
   background: url(${greenBG});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
}
&.dark{
   background: url(${redAboutBg});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
}
h1{
    font-size: 2.5rem;
    font-weight: 700;
    width: fit-content;
    background-color: white;
    border: 1px solid #F2E0E1;
    padding: .5rem 2.5rem;
    border-radius: 50px;
    margin: 0 auto;
    color: black;
}
.benefit-card-group{
    max-width: 1300px;
    display: grid;
    grid-template-columns: auto auto auto;
     grid-gap: 3rem 2rem;
     justify-content: space-between;
     width: 90%;
     margin: 3rem auto;
     .benefit-card{
            background-color: white;
            border-radius: 16px;
            width: fit-content;
            display: flex;
            flex-direction: column;
            align-items: end;
            justify-content: space-between;
            .img-wrapper{
                overflow: hidden;
                border-radius:16px;
                width: 100%;
                img{
                    width: 100%;
                    transition: all 250ms linear;
                    &:hover{
                        transform: scale(1.5)
                        }
                    }
                }
                .card-content{
                padding: .5rem 1.5rem;
                height: min-content;
                h2{
                    font-weight: 600;
                    font-size: 1.2rem;
                    margin-bottom: 1rem;
                    color: black
                }
                p{
                    color: #757575;
                    font-size: .8rem
                    }
                }
                button{
                    display: flex;
                    align-items: center;
                    border-radius: 50px;
                    padding: .6rem 1.5rem;
                        font-weight: 500;
                        font-size: .9rem;
                        letter-spacing: 1.2px;
                        width: fit-content;
                        margin: 1rem auto;
                        svg{
                            width: 12px;
                            height: 12px;
                            margin-left: .5rem;
                        }
                        &.light-btn{
                            background-color: #12613F;
                            color: white;
                        }
                        &.dark-btn{
                            color: white;
                            background-color: #A1272E;
                            svg{
                                path{
                                    fill: white;
                                }
                            }
                        }
                    }    
     }
}

@media (max-width: 1100px){
    padding: 6rem 4rem;
}

@media (max-width: 990px){
    padding: 6rem 1rem;
    .benefit-card-group{
        width: 100%;
        overflow-x: auto;
        .benefit-card{
            min-width: 300px;
        }
    }
}
@media (max-width: 768px){
   h1{
    font-size: 2rem;
   }

@media (max-width: 420px){
   h1{
    font-size: 1.5rem;
   }


`

export const LocationStyles = styled.section`
background-color: #EBEBEB;
border-bottom: 2px solid #F2E0E1;
.location-container{
    max-width: 1300px;
    margin: 0 auto;
    height: fit-content;
    padding: 6rem;
    color: black;
h1{
    font-size: 2.5rem;
    font-weight: 700;
    width: fit-content;
    border: 1px solid #F2E0E1;
    padding: .5rem 2.5rem;
    border-radius: 50px;
    margin: 0 auto;
    color: white;
    &.light{
        background-color: #178154;
    }
    &.dark{
        background-color: #D03C45;
    }
}
.location-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 450px;
    width: 100%;
    margin: 3rem auto;
    .location-centers-card{
        width: 45%;
        background: #FFFFFF;
        border: 1px solid #E1E6EC;
        border-radius: 20px;
        margin-right: 1rem;
        height: 450px;
        padding: 1rem 1.5rem;
        .search-input{
            width: 100%;
            display: flex;
            border: 0.868966px solid #6BAAE6;
            box-shadow: 0px 8.68966px 26.069px rgba(0, 0, 0, 0.08);
            border-radius: 94.5946px;
            margin: .5rem auto;
            input{
                width: 100%;
                padding: .6rem 2rem;
                background-color: white;
                border-top-left-radius: 94.5946px;
                border-bottom-left-radius: 94.5946px;
                color: #777374;
                &:focus{
                    outline: 0.868966px solid #6BAAE6;
                }
                &::placeholder{
                    color: #777374;
                    font-size: .9rem;
                }
            }
            img{
                border-top-right-radius: 94.5946px;
                border-bottom-right-radius: 94.5946px;
                padding: .5rem 1rem;
                cursor: pointer;
                &.light{
                    background-color: #178154;
                }
                &.dark{
                    background-color: #BE343E;
                }
            }
        }
        .first{
            overflow: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 350px;

            .find-location-text{
                h2{
                    font-weight: 600;
                    font-size: 1.3rem;
                    margin: 1rem 0;
                }
                p{
                    color: #777374;
                    font-size: .8rem;
                }
                button{
                        white-space: nowrap;
                        display: flex;
                        align-items: center;
                        border-radius: 50px;
                        padding: .5rem 1rem;
                        font-weight: 500;
                        font-size: .8rem;
                        width: fit-content;
                        margin: 1rem auto;
                        svg{
                            width: 12px;
                            height: 12px;
                            margin-left: .5rem;
                                path{
                                    fill: white;
                            }
                        }
                        &.light{
                            background-color: #12613F;
                            color: white;
                        }
                        &.dark{
                            color: white;
                            background-color: #A1272E;
                        }
                     }
            }
            .reach-out{
                width: 100%;
                padding: 1rem;
                margin: 1rem auto;
                text-align: center;
                background-color: #F3F3F3;
                border-radius: 20px;
                .reach-btns{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                     margin: 1rem 0;
                     flex-wrap: wrap;
                     align-items: center;
                     span{
                        margin: 0 .5rem;
                     }
                    button{
                        margin-top: .5rem;
                        white-space: nowrap;
                        display: flex;
                        align-items: center;
                        border-radius: 50px;
                        padding: .5rem 1rem;
                            font-weight: 500;
                            font-size: .7rem;
                            svg{
                                width: 12px;
                                height: 12px;
                                margin-left: .5rem;
                                path{
                                    fill: white;
                                }
                            }
                            &.light{
                                background-color: #12613F;
                                color: white;
                            }
                            &.dark{
                                color: white;
                                background-color: #A1272E;
                            }
                    }
                    .default-light{
                        background-color: white;
                        color: black;
                        border: 1px solid #12613F;
                        box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.05);
                        svg{
                            path{
                                fill: black;
                            }
                        }
                    }
                    .default-dark{
                        background-color: white;
                        color: black;
                        border: 1px solid #A1272E;
                        box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.05);
                        svg{
                            path{
                                fill: black;
                            }
                        }
                    }
                }
            }
        }

        .second{
        
            .back{
                display: flex;
                align-items: center;
                border-bottom: 1px solid #E1E6EC;
                padding-bottom: .5rem;
                cursor: pointer;
                p{
                    color: #A19B9D;
                    margin-left: .5rem;
                    font-size: .8rem;
                }
            }
            .location-cards-wrapper{
                overflow-y: scroll;
                height: 320px;
                &::-webkit-scrollbar{
                    width: 10px;
                }
                &::-webkit-scrollbar-track {
                    box-shadow: inset 0 0 5px #E7E7E7; 
                    border-radius: 10px;
                    margin: 2rem 0;
                  }
                  &::-webkit-scrollbar-thumb {
                    background: #999CA4; 
                    border-radius: 10px;
                  }

                  .location-cards{
                    margin-right: 1rem;
                  }
            }
        }
    }
    .map-wrapper{
        height: 450px;
        width: 55%;
        object-fit: cover;
    }
}
}

@media (max-width: 1100px){
    .location-container{
        padding: 6rem 2rem;
    }
}
@media (max-width: 768px){
    .location-container{
        padding: 6rem 1rem;
        .location-wrapper{
            .location-centers-card{
                padding: 1rem;
                .search-input{
                    input{
                        padding:.6rem .8rem;
                    }
                }
            }
        }
    }
}
@media (max-width: 680px){
    .location-container{
        padding: 6rem 1rem;
        h1{
            font-size: 2rem;
        }
        .location-wrapper{
            .location-centers-card{
                width: 60%;
                padding: 1rem;
                .search-input{
                    input{
                        padding:.6rem .8rem;
                    }
                }
            }
            .map-wrapper{
                width: 40%;
            }
        }
    }
}

@media (max-width: 500px){
    .location-container{
        padding: 6rem 1rem;
        h1{
            font-size: 1.5rem;
        }
        .location-wrapper{
            .location-centers-card{
                width: 100%;
                padding: 1rem;
                margin: 0;
                .search-input{
                    input{
                        padding:.6rem 1rem;
                    }
                }
            }
            .map-wrapper{
                display: none
            }
        }
    }
}
`
export const LocationCardStyles = styled.div`
    padding: 1rem;
    border: 1px solid #E1E6EC;
    border-radius: 10px;
    margin: 1rem 0;
    cursor: pointer;
    h2{
        font-weight: 700;
        color: black;
        font-size: .9rem;
    }

    .open-info{
        display: flex;
        align-items: center;
        .card-info{
            display: flex;
            align-items: center;
            border: 1px solid #E1E6EC;
            border-radius: 50px;
            padding:.3rem .5rem;
            font-size: .7rem;
            font-weight: 500;
            margin-top: 0;
            margin-bottom: 0;
            color: #A19B9D;
            img{
                width: 12px;
            }
            p{
                margin-left: .5rem;
            }
        }
    }

    .card-info{
        display: flex;
        align-items: center;
        border: 1px solid #E1E6EC;
        border-radius: 50px;
        padding:.3rem .5rem;
        font-size: .7rem;
        font-weight: 500;
        margin: .5rem 0;
        color: #A19B9D;
        img{
            width: 12px;
        }
        p{
            margin-left: .5rem;
        }
    }
    .open{
        margin-left: .5rem; 
       
    }
`

export const ContactWrapper = styled.section`
padding: 6rem;
margin: 0 auto;
background-color: #EBEBEB;
h1{
    font-size: 2.5rem;
    font-weight: 700;
    width: fit-content;
    background-color: white;
    border: 1px solid #F2E0E1;
    padding: .5rem 2.5rem;
    border-radius: 50px;
    margin: 0 auto;
    color: black;
 }
 @media (max-width: 1100px){
    padding: 6rem 4rem;
 }
 @media (max-width: 990px){
    padding: 6rem 2rem;
 }
 @media (max-width: 520px){
    padding: 6rem 1rem;
    h1{
        font-size: 2rem;
    }
 }
 @media (max-width: 420px){
    h1{
        font-size: 1.5rem;
    }
 }
`
export const ContactStyles = styled.div`
max-width: 1300px;
margin: 2rem auto;
height: fit-content;
border-radius: 20px;
padding: 3rem;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
&.light{
    background: url(${greenBG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
 }
 &.dark{
    background: url(${redAboutBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
 }
.left{
    width: 50%;
    h2{
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 2rem;
        width: 80%;
    }
    .cl-btns{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: fit-content;
    }
    button.light{
        background: #12613F;
        box-shadow: 0px 3.23678px 8.09196px 4.04598px rgba(0, 0, 0, 0.05);
        border-radius: 40.4598px;
        margin: .5rem .5rem .5rem 0;
    }
    button.dark{
        background: #BE343E;
        box-shadow: 0px 3.23678px 8.09196px 4.04598px rgba(0, 0, 0, 0.05);
        border-radius: 40.4598px;
        margin: .5rem .5rem .5rem 0;
    }
}
.right{
    width: 50%;
}
@media (max-width: 768px){
    padding: 3rem 1.5rem;
    .left{
        h2{
            font-size: 1.7rem;
            width: 90%;
        }
    }
}
@media (max-width: 560px){
    flex-direction: column;
    padding: 3rem 1.5rem;
    .left{
        width: 100%;
        margin-bottom: 2rem;
        h2{
            font-size: 1.7rem;
            width: 90%;
        }
    }
    .right{
        width: 100%;
    }
}
@media (max-width: 420px){
    padding: 3rem 1rem;
    .left{
        width: 100%;
        margin-bottom: 2rem;
        h2{
            font-size: 1.5rem;
            width: 100%;
        }
    }
}
`

export const ContactFormWrapper = styled.form`
width: 70%;
margin: 0 auto;
.input-group{
    display: flex;
    align-items: start;
    background-color: #FFFFFF;
    border: 1px solid #E2E2E2;
    border-radius: 5px;
    margin-bottom: 1rem;
    img{
        padding: .5rem 1rem;
        object-fit: contain;
    }
    input, textarea{
        background-color: #FFFFFF;
        width: 100%;
        padding: .5rem;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        color: black;
        &::placeholder{
            color: #909090;
        }
        &:focus{
            outline: 1px solid #F2E0E1;
        }
    }
}
button{
    background: white;
    color: black;
    margin-left: auto;
    width: fit-content;
    font-weight: 600;
}
@media (max-width: 768px){
    width: 95%;
}
@media (max-width: 560px){
    width: 80%;
}
@media (max-width: 420px){
    width: 90%;
}
`