import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: 'https://newstayle-and-chiller-vintilatsion.vercel.app/sitemap.xml',
    }
}