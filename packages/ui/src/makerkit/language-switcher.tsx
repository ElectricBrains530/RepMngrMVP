'use client';

import { Check, Languages } from 'lucide-react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from '../lib/utils';
import {
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from '../shadcn/dropdown-menu';

const LANGUAGES = [
    {
        code: 'en',
        label: 'English',
        flag: '🇺🇸',
    },
    {
        code: 'sv',
        label: 'Svenska',
        flag: '🇸🇪',
    },
];

export function SubMenuLanguageToggle() {
    const { i18n } = useTranslation();
    const selectedLanguage = i18n.language;

    const MenuItems = useMemo(
        () =>
            LANGUAGES.map((lang) => {
                const isSelected = selectedLanguage === lang.code;

                return (
                    <DropdownMenuItem
                        className={cn('flex cursor-pointer items-center justify-between', {
                            'bg-muted': isSelected,
                        })}
                        key={lang.code}
                        onClick={() => {
                            setCookieLanguage(lang.code);
                            window.location.reload();
                        }}
                    >
                        <span className={'flex items-center space-x-2'}>
                            <span className={'text-base leading-none'}>{lang.flag}</span>
                            <span>{lang.label}</span>
                        </span>

                        {isSelected && <Check className={'h-4 w-4'} />}
                    </DropdownMenuItem>
                );
            }),
        [selectedLanguage],
    );

    return (
        <>
            <DropdownMenuSub>
                <DropdownMenuSubTrigger
                    className={
                        'hidden w-full items-center justify-between gap-x-3 lg:flex'
                    }
                >
                    <span className={'flex items-center space-x-2 pl-1'}>
                        <Languages className={'h-5 w-5'} />
                        <span>Language</span>
                    </span>
                </DropdownMenuSubTrigger>

                <DropdownMenuSubContent>{MenuItems}</DropdownMenuSubContent>
            </DropdownMenuSub>

            <div className={'lg:hidden'}>
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                {MenuItems}
            </div>
        </>
    );
}

function setCookieLanguage(lang: string) {
    document.cookie = `lang=${lang}; path=/; max-age=31536000`;
}
