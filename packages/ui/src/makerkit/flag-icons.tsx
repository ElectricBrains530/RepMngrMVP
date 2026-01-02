
import { cn } from '../lib/utils';

interface FlagProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

export function USFlag({ className, ...props }: FlagProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={cn('h-5 w-5', className)}
            {...props}
        >
            <mask id="us-mask">
                <circle cx="256" cy="256" r="256" fill="#fff" />
            </mask>
            <g mask="url(#us-mask)">
                <path
                    fill="#eee"
                    d="M256 0h256v64l-32 32 32 32v64l-32 32 32 32v64l-32 32 32 32v64l-256 32L0 448v-64l32-32-32-32v-64z"
                />
                <path
                    fill="#d80027"
                    d="M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z"
                />
                <path fill="#0052b4" d="M0 0h256v256H0Z" />
                <path
                    fill="#eee"
                    d="m187 243 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67zm162-81 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67Zm162-82 57-41h-70l57 41-22-67Zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67Z"
                />
            </g>
        </svg>
    );
}

export function SEFlag({ className, ...props }: FlagProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={cn('h-5 w-5', className)}
            {...props}
        >
            <mask id="se-mask">
                <circle cx="256" cy="256" r="256" fill="#fff" />
            </mask>
            <g mask="url(#se-mask)">
                <path
                    fill="#0052b4"
                    d="M0 0h133.6l35.3 16.7L200.3 0H512v222.6l-22.6 31.7 22.6 35.1V512H200.3l-32-19.8-34.7 19.8H0V289.4l22.1-33.3L0 222.6z"
                />
                <path
                    fill="#ffda44"
                    d="M133.6 0v222.6H0v66.8h133.6V512h66.7V289.4H512v-66.8H200.3V0z"
                />
            </g>
        </svg>
    );
}
