import styled from "styled-components";

export const StyledHeader = styled.header`
background-color: white;
padding: 1.5rem 4rem;
border-bottom: 1px solid #F2E0E1;
font-family: 'Montserrat', sans-serif;
z-index: 10;
position: fixed;
width: 100%;
&.opaque{
    opacity: 0.3;
}
.header-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    .mode-toggler{
        cursor: pointer;
        margin-right: .5rem;
    }
    .header-links{
        display:flex;
        align-items: center;
        justify-content: end;
        .nav-links{
            a{
                text-decoration: none;
                color: #7D7D7D;
                font-weight: 400;
                font-size: .85rem;
                margin-right: 1.5rem;
                &.active{
                    font-weight: 800;
                    color: black;
                }
            }
        }
        .nav-buttons{
            display: flex;
            button:not(:last-child){
                margin-right: 1.5rem;
            }
            button{
                display: flex;
                align-items: center;
                border-radius: 50px;
                padding: .6rem 1rem;
                font-size: .8rem;
                font-weight: 500;
                height: 33px;
                svg{
                    width: 15px;
                    height: 14px;
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
            .default-btn{
                background-color: white;
                color: black;
                border: 1px solid #DEE6E2;
                box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.05);
            }
        }
    }
    .menu-toggle{
        display: none;
    }
}

@media (max-width: 990px){
    padding: 1.5rem 2rem;
    .header-wrapper{
        .header-links{
            .nav-links{
                a{
                    margin-right: 1rem;
                }
            }
            .nav-buttons{
                button:not(:last-child){
                    margin-right: .5rem;
                }
            }
        }
    }
}

@media (max-width: 798.98px){
    .header-wrapper{
        .header-links{
            display: none;
        }
        .menu-toggle{
            display: inline-flex;
            color: black;
            font-size: 2rem;
        }
    }
}

@media (max-width: 798.98px){
    padding: 1.5rem 1rem;
}
`

export const MobileHeaderWrapper = styled.header`
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: white;
    padding-top: 7rem;
    position: fixed;
    z-index: -5;
    top: 0;
    transform: translateX(4000px);
    transition: all 250ms ease-in;
    &.open{
        transform: translateX(0);
        z-index: 5;
    }
    .header-links{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .nav-links{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
            a{
                text-decoration: none;
                color: #7D7D7D;
                font-weight: 400;
                font-size: .85rem;
                margin-bottom: 1.5rem;
            }
        }
        .nav-button{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            button:not(:last-child){
                margin-bottom: 1.5rem;
            }
            button{
                display: flex;
                align-items: center;
                border-radius: 50px;
                padding: .6rem 1rem;
                font-size: .8rem;
                font-weight: 500;
                height: 33px;
                svg{
                    width: 15px;
                    height: 14px;
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
            .default-btn{
                background-color: white;
                color: black;
                border: 1px solid #DEE6E2;
                box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.05);
                svg{
                    path{
                        fill: black;
                    }
                }
            }
        }
    }
`