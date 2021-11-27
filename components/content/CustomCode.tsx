import React, { ComponentPropsWithRef, useRef, useState } from "react";
import {HiCheckCircle, HiClipboard} from 'react-icons/hi';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export function Pre(props: ComponentPropsWithRef<'pre'>) {
    return (
        <pre>
            {props.children}
            <style jsx>{`
                pre {
                    position: relative;
                    padding-top: 2.5rem;
                }
            `}</style>
        </pre>
    )
}

export default function CustomCode(props: ComponentPropsWithRef<'code'>) {
    const textRef = useRef<HTMLDivElement>(null)
    const [isCopied, setIsCopied] = useState<boolean>(false)

    const language = props.className?.includes('language')
    ? props.className.replace('language-', '').replace(' code-highlight', '')
    : null;

    return (
        <code {...props}>
            {language ? (
                <div ref={textRef}>
                    {props.children}
                </div>
            ) : (
                <span>{props.children}</span>
            )}
            
            {language && (
                <div>
                    <span>
                        {language}
                    </span>
                </div>
            )}

            {language && (
                <CopyToClipboard
                    text={textRef?.current?.textContent ?? ''}
                    onCopy={() => {
                        setIsCopied(true)
                        setTimeout(() => setIsCopied(false), 1500)
                    }}
                >
                    <button>
                        {isCopied ? (
                            <HiCheckCircle />
                        ) : (
                            <HiClipboard />
                        )}
                    </button>
                </CopyToClipboard>
            )}
        </code>
    )
}