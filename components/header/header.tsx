'use client'
import { Menu, MenuProps } from "antd";
import { useState } from "react";
import { useRouter } from 'next/navigation'


const CustomHeader = () => {
    const [current, setCurrent] = useState("home");
    type MenuItem = Required<MenuProps>['items'][number];
    const router = useRouter()

    const navegateMenu: MenuProps['onClick'] = (e) => {
        router.push("/"+e.key);

    };

    const items: MenuItem[] = [
    {
        label: 'Sobre',
        key: 'about',
    },
    {
        label:'Contato',
        key: 'contact',
    },
    {
        label:(<img src="/images/logo.png" alt="14 Bis Escoteiros"  width={80} />),
        key: '',
    },

    {
        label:'Notícias',
        key: 'news',
    },
    {
        label:'Eventos',
        key: 'events',
    }
    ];

    return (
        <div className="flex w-full h-20 align-center" >
            <Menu onClick={navegateMenu} selectedKeys={[current]} mode="horizontal" items={items} className="w-full flex items-center justify-center"/>   
        </div>
    )
}

export default CustomHeader;