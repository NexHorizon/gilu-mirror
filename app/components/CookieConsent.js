'use client'

import { useEffect } from 'react'
import * as CookieConsent from 'vanilla-cookieconsent'

const CAT_NECESSARY = 'necessary'
const CAT_ANALYTICS = 'analytics'
const CAT_ADVERTISEMENT = 'advertisement'

const SERVICE_AD_STORAGE = 'ad_storage'
const SERVICE_AD_USER_DATA = 'ad_user_data'
const SERVICE_AD_PERSONALIZATION = 'ad_personalization'
const SERVICE_ANALYTICS_STORAGE = 'analytics_storage'

export default function CookieConsentComponent() {
  useEffect(() => {
    // Define dataLayer and the gtag function.
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }

    // Set default consent to 'denied' (this should happen before changing any other dataLayer)
    gtag('consent', 'default', {
      [SERVICE_AD_STORAGE]: 'denied',
      [SERVICE_AD_USER_DATA]: 'denied',
      [SERVICE_AD_PERSONALIZATION]: 'denied',
      [SERVICE_ANALYTICS_STORAGE]: 'denied',
    })

    /**
     * Update gtag consent according to the users choices made in CookieConsent UI
     */
    function updateGtagConsent() {
      gtag('consent', 'update', {
        [SERVICE_ANALYTICS_STORAGE]: CookieConsent.acceptedService(
          SERVICE_ANALYTICS_STORAGE,
          CAT_ANALYTICS,
        )
          ? 'granted'
          : 'denied',
        [SERVICE_AD_STORAGE]: CookieConsent.acceptedService(SERVICE_AD_STORAGE, CAT_ADVERTISEMENT)
          ? 'granted'
          : 'denied',
        [SERVICE_AD_USER_DATA]: CookieConsent.acceptedService(
          SERVICE_AD_USER_DATA,
          CAT_ADVERTISEMENT,
        )
          ? 'granted'
          : 'denied',
        [SERVICE_AD_PERSONALIZATION]: CookieConsent.acceptedService(
          SERVICE_AD_PERSONALIZATION,
          CAT_ADVERTISEMENT,
        )
          ? 'granted'
          : 'denied',
      })
    }

    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: 'box',
          position: 'bottom right',
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: 'box',
          position: 'right',
          equalWeightButtons: true,
          flipButtons: false,
        },
      },

      // Trigger consent update when user choices change
      onFirstConsent: () => {
        updateGtagConsent()
      },
      onConsent: () => {
        updateGtagConsent()
      },
      onChange: () => {
        updateGtagConsent()
      },

      // Configure categories and services
      categories: {
        [CAT_NECESSARY]: {
          enabled: true,
          readOnly: true,
        },
        [CAT_ANALYTICS]: {
          autoClear: {
            cookies: [
              {
                name: /^_ga/,
              },
              {
                name: '_gid',
              },
            ],
          },
          services: {
            [SERVICE_ANALYTICS_STORAGE]: {
              label:
                'Umožňuje ukládání (například cookies) související s analýzou, např. doba návštěvy.',
            },
          },
        },
        [CAT_ADVERTISEMENT]: {
          services: {
            [SERVICE_AD_STORAGE]: {
              label: 'Umožňuje ukládání (například cookies) související s reklamou.',
            },
            [SERVICE_AD_USER_DATA]: {
              label:
                'Nastavuje souhlas pro odesílání uživatelských dat souvisejících s reklamou do Google.',
            },
            [SERVICE_AD_PERSONALIZATION]: {
              label: 'Nastavuje souhlas pro personalizovanou reklamu.',
            },
          },
        },
      },

      language: {
        default: 'cs',
        translations: {
          cs: {
            consentModal: {
              title: 'Používáme cookies',
              description:
                'Tento web používá nezbytné cookies pro zajištění správného fungování a sledovací cookies pro pochopení, jak s ním interagujete. Ty druhé budou nastaveny pouze po udělení souhlasu.',
              acceptAllBtn: 'Přijmout vše',
              acceptNecessaryBtn: 'Odmítnout vše',
              showPreferencesBtn: 'Spravovat individuální nastavení',
            },
            preferencesModal: {
              title: 'Spravovat nastavení cookies',
              acceptAllBtn: 'Přijmout vše',
              acceptNecessaryBtn: 'Odmítnout vše',
              savePreferencesBtn: 'Přijmout aktuální výběr',
              closeIconLabel: 'Zavřít okno',
              sections: [
                {
                  title: 'Použití cookies',
                  description:
                    'Používáme cookies pro zajištění základních funkcí webových stránek a pro zlepšení vašeho online zážitku.',
                },
                {
                  title: 'Nezbytné cookies',
                  description:
                    'Tyto cookies jsou nezbytné pro správné fungování webových stránek, například pro autentizaci uživatelů.',
                  linkedCategory: CAT_NECESSARY,
                },
                {
                  title: 'Analytika',
                  description:
                    'Cookies používané pro analýzu pomáhají sbírat data, která službám umožňují pochopit, jak uživatelé interagují s konkrétní službou. Tyto poznatky umožňují službám jak zlepšit obsah, tak vytvářet lepší funkce, které zlepšují uživatelský zážitek.',
                  linkedCategory: CAT_ANALYTICS,
                  cookieTable: {
                    headers: {
                      name: 'Název',
                      domain: 'Služba',
                      description: 'Popis',
                      expiration: 'Platnost',
                    },
                    body: [
                      {
                        name: '_ga',
                        domain: 'Google Analytics',
                        description:
                          'Cookie nastavená <a href="https://business.safety.google/adscookies/">Google Analytics</a>',
                        expiration: 'Platnost 12 dní',
                      },
                      {
                        name: '_gid',
                        domain: 'Google Analytics',
                        description:
                          'Cookie nastavená <a href="https://business.safety.google/adscookies/">Google Analytics</a>',
                        expiration: 'Session',
                      },
                    ],
                  },
                },
                {
                  title: 'Reklama',
                  description:
                    'Google používá cookies pro reklamu, včetně zobrazování a personalizace reklam (v závislosti na vašem nastavení reklam na <a href=\"https://g.co/adsettings\">g.co/adsettings</a>), omezení počtu zobrazení reklamy uživateli, ztlumení reklam, které jste se rozhodli nevidět, a měření účinnosti reklam.',
                  linkedCategory: CAT_ADVERTISEMENT,
                },
              ],
            },
          },
        },
      },
    })
  }, [])

  return null
}
