import React, { useEffect, useState } from 'react';
// nhớ đặt <html lang="en" class="dark"> ở index.html
const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : "dark"
    );
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-schema: dark)")
    const option = [
        {
            icon: "sunny-outline",
            text: "light"
        },
        {
            icon: "moon-outline",
            text: "dark"
        },
        {
            icon: "settings-outline",
            text: "system"
        }
    ]
    function onWindowMath() {
        if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add('dark')
        } else {
            element.classList.remove('dark')
        }
    }
    onWindowMath();


    useEffect(() => {
        switch (theme) {
            case "dark":
                element.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                break;
            case "light":
                element.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                break;
            default:
                localStorage.removeItem('theme');
                onWindowMath();
                break
        }
    }, [theme]);

    darkQuery.addEventListener('change', e => {
        if(!(theme in localStorage)){
            if(e.matches){
                element.classList.add('dark')
            }else{
                element.classList.remove('dark')
            }
        }
    })

    return (
        <div className='dark:bg-slate-600 dark:text-white 
                               bg-white text-black
        h-screen'>
            <div className='max-w-2xl mx-auto  pt-5'>
                <h3 className='text-center font-bold text-4xl mb-5
            '>TEST DARK MODE</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestiae labore nesciunt tempore error voluptates possimus aliquam odit in dolor asperiores, unde officia porro hic, quam laudantium illo quas maxime, ab nobis! Possimus dolores illum laboriosam distinctio, molestias veritatis deleniti impedit libero quidem non odit aliquam consequatur eaque dolor, obcaecati voluptatum exercitationem amet saepe. Nemo inventore deserunt velit quo excepturi distinctio maxime, tenetur culpa fuga similique tempora? Perferendis repellendus architecto aperiam fugit neque doloremque. Numquam nostrum consequatur recusandae eum deserunt totam a laudantium ipsam nemo quaerat? Labore beatae libero odio officiis adipisci voluptates dicta eveniet sed quam quia incidunt corrupti, explicabo provident doloremque, aperiam corporis nostrum. Temporibus sapiente excepturi vero! Laboriosam ratione quo quas aliquam asperiores dolor illo nemo, architecto libero laudantium repellat expedita excepturi explicabo fuga, quis, quasi at ipsam! Delectus, quas suscipit. At, pariatur totam. Ipsum quasi similique quia voluptate deserunt inventore tempore quod, aliquam, vero dolorum adipisci repellat et ducimus rerum non eveniet perspiciatis id facilis nobis nam accusamus odit laborum! Ad earum vitae iure explicabo, incidunt ex dicta cum facere nisi voluptatum rem veniam veritatis ab quia velit. Quia, provident. Ut non possimus nisi quos ratione perspiciatis at, earum expedita. Placeat asperiores voluptas quibusdam dolorem repellendus.</p>
                <div className="fixed top-5 right-10">
                    {
                        option?.map(item =>
                            <button
                                onClick={() => {
                                    setTheme(item.text)
                                }}

                                key={item.text}
                                className={`bg-black text-white rounded border border-white duration-300
                                w-9 h-9 text-2xl leading-10 mx-1 opacity-25 ${theme === item.text && 'bg-gray-500 text-black opacity-100'}`}
                            >
                                <ion-icon name={item.icon}></ion-icon>
                            </button>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default DarkMode;