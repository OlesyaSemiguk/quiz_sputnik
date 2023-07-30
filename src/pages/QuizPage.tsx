import { Main } from 'components/Main/Main'
import { Layout } from 'antd'
import { ConfigProvider } from 'antd'

const QuizPage = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#006d75',
        },
      }}
    >
      <Layout className="layout">
        <Main />
      </Layout>
    </ConfigProvider>
  )
}

export default QuizPage
