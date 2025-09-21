import Scraper from "../../../../shared/models/scraper.interface";

export const ProfileMyScrapersRepository: Scraper[] = [
    {
      name: 'E-ticaret Ürün Verisi',
      url: 'example-store.com',
      status: 1,
      lastRun: '2 saat önce',
      recordCount: 1250
    },
    {
      name: 'Haber Makaleleri',
      url: 'news-site.com',
      status: 2,
      lastRun: '1 gün önce',
      recordCount: 850
    },
    {
      name: 'İş İlanları',
      url: 'job-portal.com',
      status: 3,
      lastRun: '3 gün önce',
      recordCount: 2100
    }
];