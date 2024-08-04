import Heading2 from '@/src/components/typography/Heading2'
import { useTranslations } from 'next-intl'

export default function Applicants() {
  const t = useTranslations('')

  return (
    <div className='container pb-4'>
      <Heading2>{t('Abiturientlarga')}</Heading2>
      <p>{t('Sahifa yaratilish jarayonida')}</p>
    </div>
  )
}
