import { Chart, Header, Logo, Page } from '../../common'
import { MetaImageProps } from './getMetaImageProps'

export function MetaImage(props: MetaImageProps) {
  return (
    <Page
      metadata={props.metadata}
      preloadApi={props.apiEndpoint}
      includeMetaImageStyles
    >
      <script
        dangerouslySetInnerHTML={{
          __html: "localStorage.setItem('l2beat-theme', 'light')",
        }}
      />
      <div className={!props.name ? 'meta--overview' : 'meta--project'}>
        <Header
          title={props.name ?? 'Overview'}
          icon={props.icon}
          tvl={props.tvl}
          sevenDayChange={props.sevenDayChange}
        />
        <Chart endpoint={props.apiEndpoint} days={30} />
        <Logo />
      </div>
    </Page>
  )
}
