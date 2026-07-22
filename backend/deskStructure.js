import S from '@sanity/desk-tool/structure-builder'
import { AiTwotoneHome, AiTwotoneFolderOpen, AiTwotoneSetting } from "react-icons/ai";
import { BASE_LANGUAGE } from './schemas/localization/locales';
export default () => {
  const HOME_ID = 'f9aa0569-d824-43fe-ba1b-b8be7f6d65ee'
  return (
    S.list()
      .title('Content')
      .items([
        S.listItem()
          .title('Home')
          .icon(AiTwotoneHome)
          .child(
            S.documentList()
              .id('home-page')
              .schemaType('home')
              .filter('_type == "home" && __i18n_lang == $baseLanguage')
              .params({ baseLanguage: BASE_LANGUAGE })
          ),
        S.listItem()
          .title('Pages')
          .icon(AiTwotoneFolderOpen)
          .child(
            S.documentList()
              .id('other-pages')
              .schemaType('page')
              .filter('_type == "page" && __i18n_lang == $baseLanguage')
              .params({ baseLanguage: BASE_LANGUAGE })
          ),
        S.divider(),
        ...S.documentTypeListItems()
          .filter(listItem => !['home', 'page', 'setting'].includes(listItem.getId())),
        S.divider(),
        S.listItem()
          .title('Settings')
          .icon(AiTwotoneSetting)
          .child(
            S.document()
              .schemaType('setting')
              .documentId('60379655-7ee6-4894-87f7-319d9710d4f0')
            // .id('settings-page')
            // .filter('_type == "setting"')
          ),
        // .child(
        //   S.document()
        // )
      ])
  )
}