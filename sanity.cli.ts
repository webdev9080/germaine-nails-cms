import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '0k4zazrm',
    dataset: 'production'
  },
  
  studio: {
    // Ajoute cette ligne :
    studioHost: 'https://germaine-nails-cms.sanity.studio'
  },
  
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
