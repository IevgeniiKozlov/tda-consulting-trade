import { IconType } from 'react-icons'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { GiTrade } from 'react-icons/gi'
import { LiaShipSolid } from 'react-icons/lia'
import { MdOutlineHighQuality, MdOutlineSupportAgent } from 'react-icons/md'

export interface INavSocials {
  href: string
  icon: IconType
}

export interface IServices {
  icon: IconType
  title: string
  description: string
}

export interface IInfo {
  percent: string
  description: string
}

export interface IValues {
  title: string
  img: string
  description: string
}

export const coreValues: IValues[] = [
  {
    title: 'Integrity',
    img: '/integrity.png',
    description:
      'We conduct our business with transparency and ethical principles.',
  },
  {
    title: 'Reliability',
    img: '/reliability.png',
    description:
      'We consistently deliver on our promises and exceed expectations.',
  },
  {
    title: 'Sustainability',
    img: '/sustainability.png',
    description:
      'We promote sustainable responsible practices in every aspect of our business.',
  },
  {
    title: 'Customer-Focus',
    img: '/brand-identity.png',
    description:
      'We place our clients needs at the center of everything we do.',
  },
]

export const infoBlock: IInfo[] = [
  {
    percent: '92%',
    description: 'Client Satisfaction Rate',
  },
  {
    percent: '80%',
    description: 'Market Growth Yearly',
  },
  {
    percent: '40',
    description: 'Countries Served Worldwide',
  },
  {
    percent: '24',
    description: 'Partnerships Established',
  },
]

export const navSocials: INavSocials[] = [
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/380676340422',
  },
  {
    icon: FaTelegram,
    href: 'https://t.me/+380676340422',
  },
]

export const services: IServices[] = [
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
      'We guarantee that all products supplied by us comply with the highest international quality standards. Our quality control processes are rigorous and continuously updated to ensure product integrity.',
  },
  {
    icon: MdOutlineSupportAgent,
    title: 'Consulting',
    description:
      'Our team of experts offers professional consulting services to help clients navigate the complexities of the energy market. From market analysis to strategy development, we provide insights that drive informed decision-making.',
  },
  {
    icon: LiaShipSolid,
    title: 'Logistics Management',
    description:
      'We offer end-to-end logistics solutions, including storage, transportation, and delivery of petroleum products. Our logistics team ensures that all operations are conducted efficiently and safely, minimizing risks and costs.',
  },
]
