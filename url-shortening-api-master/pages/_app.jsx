import '../styles/global.css'
import { StorageProvider } from '../utils/useStorage'
import { ClipBoardProvider } from '../utils/useClipBoard'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <StorageProvider>
      <ClipBoardProvider>
        <Component {...pageProps} />
      </ClipBoardProvider>
    </StorageProvider>
  )
}