import {
  CtaButton,
  FeatureCard,
  FeatureGrid,
  FeatureShowcase,
  FeatureShowcaseIconContainer,
  Hero,
  Pill,
} from '@kit/ui/marketing';
import { Trans } from '@kit/ui/trans';
import { ArrowRightIcon, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { withI18n } from '~/lib/i18n/with-i18n';

function Home() {
  return (
    <div className={'mt-4 flex flex-col space-y-24 py-14'}>
      <div className={'container mx-auto'}>
        <Hero
          pill={
            <Pill label={'New'}>
              <Trans i18nKey={'marketing:hero.pill'} />
            </Pill>
          }
          title={<Trans i18nKey={'marketing:hero.title'} />}
          subtitle={
            <span>
              <Trans i18nKey={'marketing:hero.subtitle'} />
            </span>
          }
          cta={<MainCallToActionButton />}
          image={
            <Image
              priority
              className={
                'dark:border-primary/10 rounded-2xl border border-gray-200'
              }
              width={3558}
              height={2222}
              src={`/images/dashboard.webp`}
              alt={`App Image`}
            />
          }
        />
      </div>

      <div className={'container mx-auto'}>
        <div
          className={'flex flex-col space-y-16 xl:space-y-32 2xl:space-y-36'}
        >
          <FeatureShowcase
            heading={
              <>
                <b className="font-semibold dark:text-white">
                  <Trans i18nKey={'marketing:features.heading'} />
                </b>
                .{' '}
                <span className="text-muted-foreground font-normal">
                  <Trans i18nKey={'marketing:features.subheading'} />
                </span>
              </>
            }
            icon={
              <FeatureShowcaseIconContainer>
                <LayoutDashboard className="h-5" />
                <span>
                  <Trans i18nKey={'marketing:features.allInOne'} />
                </span>
              </FeatureShowcaseIconContainer>
            }
          >
            <FeatureGrid>
              <FeatureCard
                className={'relative col-span-2 overflow-hidden'}
                label={<Trans i18nKey={'marketing:features.dashboard.label'} />}
                description={
                  <Trans i18nKey={'marketing:features.dashboard.description'} />
                }
              />

              <FeatureCard
                className={
                  'relative col-span-2 w-full overflow-hidden lg:col-span-1'
                }
                label={
                  <Trans i18nKey={'marketing:features.authentication.label'} />
                }
                description={
                  <Trans
                    i18nKey={'marketing:features.authentication.description'}
                  />
                }
              />

              <FeatureCard
                className={'relative col-span-2 overflow-hidden lg:col-span-1'}
                label={
                  <Trans i18nKey={'marketing:features.multiTenancy.label'} />
                }
                description={
                  <Trans
                    i18nKey={'marketing:features.multiTenancy.description'}
                  />
                }
              />

              <FeatureCard
                className={'relative col-span-2 overflow-hidden'}
                label={<Trans i18nKey={'marketing:features.billing.label'} />}
                description={
                  <Trans i18nKey={'marketing:features.billing.description'} />
                }
              />
            </FeatureGrid>
          </FeatureShowcase>
        </div>
      </div>
    </div>
  );
}

export default withI18n(Home);

function MainCallToActionButton() {
  return (
    <div className={'flex space-x-4'}>
      <CtaButton>
        <Link href={'/auth/sign-up'}>
          <span className={'flex items-center space-x-0.5'}>
            <span>
              <Trans i18nKey={'common:getStarted'} />
            </span>

            <ArrowRightIcon
              className={
                'animate-in fade-in slide-in-from-left-8 h-4' +
                ' zoom-in fill-mode-both delay-1000 duration-1000'
              }
            />
          </span>
        </Link>
      </CtaButton>

      <CtaButton variant={'link'}>
        <Link href={'/contact'}>
          <Trans i18nKey={'common:contactUs'} />
        </Link>
      </CtaButton>
    </div>
  );
}
