import { IconType } from 'react-icons'
import { GiTrade } from 'react-icons/gi'
import { LiaShipSolid } from 'react-icons/lia'
import { MdOutlineHighQuality, MdOutlineSupportAgent } from 'react-icons/md'

export interface INavMenuItem {
  href: string
  value: string
}

export interface IServices {
  icon: IconType
  title: string
  description: string
}

export const navMenu: INavMenuItem[] = [
  {
    href: '/make-loi',
    value: 'LOI offer',
  },
  {
    href: '#about',
    value: 'About',
  },
  {
    href: '#services',
    value: 'Services',
  },
  {
    href: '#products',
    value: 'Products',
  },
  {
    href: '#contacts',
    value: 'Contacts',
  },
]

export const services = [
  {
    title: 'Trading and Supply',
    icon: GiTrade,
    description:
      'We provide reliable trading and supply services for crude oil, gasoline, diesel fuel, and other petroleum products. Our extensive network of suppliers and logistics partners ensures timely delivery and competitive pricing.',
  },
  {
    icon: MdOutlineHighQuality,
    title: 'Quality Assurance',
    description:
      'We guarantee that all products supplied by us comply with the highest international quality standards. Our quality control processes are rigorous and continuously updated to ensure product integrity and customer satisfaction.',
  },
  {
    icon: LiaShipSolid,
    title: 'Logistics Management',
    description:
      'We offer end-to-end logistics solutions, including storage, transportation, and delivery of petroleum products. Our logistics team ensures that all operations are conducted efficiently and safely, minimizing risks and costs.',
  },

  {
    icon: MdOutlineSupportAgent,
    title: 'Consulting',
    description:
      'Our team of experts offers professional consulting services to help clients navigate the complexities of the energy market. From market analysis to strategy development, we provide insights that drive informed decision-making.',
  },
]
