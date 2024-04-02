import Card from "@/components/home/card";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
      <>
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Wellness Retreat - Nepal 2024</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      /* cspell:disable-file */\n      /* webkit printing magic: print all background colors */\n      html {\n        -webkit-print-color-adjust: exact;\n      }\n\n      * {\n        box-sizing: border-box;\n        -webkit-print-color-adjust: exact;\n      }\n\n      html,\n      body {\n        margin: 0;\n        padding: 0;\n      }\n\n      @media only screen {\n        body {\n          margin: 2em auto;\n          max-width: 900px;\n          color: rgb(55, 53, 47);\n        }\n      }\n\n      body {\n        line-height: 1.5;\n        white-space: pre-wrap;\n      }\n\n      a,\n      a.visited {\n        color: inherit;\n        text-decoration: underline;\n      }\n\n      .pdf-relative-link-path {\n        font-size: 80%;\n        color: #444;\n      }\n\n      h1,\n      h2,\n      h3 {\n        letter-spacing: -0.01em;\n        line-height: 1.2;\n        font-weight: 600;\n        margin-bottom: 0;\n      }\n\n      .page-title {\n        font-size: 2.5rem;\n        font-weight: 700;\n        margin-top: 0;\n        margin-bottom: 0.75em;\n      }\n\n      h1 {\n        font-size: 1.875rem;\n        margin-top: 1.875rem;\n      }\n\n      h2 {\n        font-size: 1.5rem;\n        margin-top: 1.5rem;\n      }\n\n      h3 {\n        font-size: 1.25rem;\n        margin-top: 1.25rem;\n      }\n\n      .source {\n        border: 1px solid #ddd;\n        border-radius: 3px;\n        padding: 1.5em;\n        word-break: break-all;\n      }\n\n      .callout {\n        border-radius: 3px;\n        padding: 1rem;\n      }\n\n      figure {\n        margin: 1.25em 0;\n        page-break-inside: avoid;\n      }\n\n      figcaption {\n        opacity: 0.5;\n        font-size: 85%;\n        margin-top: 0.5em;\n      }\n\n      mark {\n        background-color: transparent;\n      }\n\n      .indented {\n        padding-left: 1.5em;\n      }\n\n      hr {\n        background: transparent;\n        display: block;\n        width: 100%;\n        height: 1px;\n        visibility: visible;\n        border: none;\n        border-bottom: 1px solid rgba(55, 53, 47, 0.09);\n      }\n\n      img {\n        max-width: 100%;\n      }\n\n      @media only print {\n        img {\n          max-height: 100vh;\n          object-fit: contain;\n        }\n      }\n\n      @page {\n        margin: 1in;\n      }\n\n      .collection-content {\n        font-size: 0.875rem;\n      }\n\n      .column-list {\n        display: flex;\n        justify-content: space-between;\n      }\n\n      .column {\n        padding: 0 1em;\n      }\n\n      .column:first-child {\n        padding-left: 0;\n      }\n\n      .column:last-child {\n        padding-right: 0;\n      }\n\n      .table_of_contents-item {\n        display: block;\n        font-size: 0.875rem;\n        line-height: 1.3;\n        padding: 0.125rem;\n      }\n\n      .table_of_contents-indent-1 {\n        margin-left: 1.5rem;\n      }\n\n      .table_of_contents-indent-2 {\n        margin-left: 3rem;\n      }\n\n      .table_of_contents-indent-3 {\n        margin-left: 4.5rem;\n      }\n\n      .table_of_contents-link {\n        text-decoration: none;\n        opacity: 0.7;\n        border-bottom: 1px solid rgba(55, 53, 47, 0.18);\n      }\n\n      table,\n      th,\n      td {\n        border: 1px solid rgba(55, 53, 47, 0.09);\n        border-collapse: collapse;\n      }\n\n      table {\n        border-left: none;\n        border-right: none;\n      }\n\n      th,\n      td {\n        font-weight: normal;\n        padding: 0.25em 0.5em;\n        line-height: 1.5;\n        min-height: 1.5em;\n        text-align: left;\n      }\n\n      th {\n        color: rgba(55, 53, 47, 0.6);\n      }\n\n      ol,\n      ul {\n        margin: 0;\n        margin-block-start: 0.6em;\n        margin-block-end: 0.6em;\n      }\n\n      li>ol:first-child,\n      li>ul:first-child {\n        margin-block-start: 0.6em;\n      }\n\n      ul>li {\n        list-style: disc;\n      }\n\n      ul.to-do-list {\n        padding-inline-start: 0;\n      }\n\n      ul.to-do-list>li {\n        list-style: none;\n      }\n\n      .to-do-children-checked {\n        text-decoration: line-through;\n        opacity: 0.375;\n      }\n\n      ul.toggle>li {\n        list-style: none;\n      }\n\n      ul {\n        padding-inline-start: 1.7em;\n      }\n\n      ul>li {\n        padding-left: 0.1em;\n      }\n\n      ol {\n        padding-inline-start: 1.6em;\n      }\n\n      ol>li {\n        padding-left: 0.2em;\n      }\n\n      .mono ol {\n        padding-inline-start: 2em;\n      }\n\n      .mono ol>li {\n        text-indent: -0.4em;\n      }\n\n      .toggle {\n        padding-inline-start: 0em;\n        list-style-type: none;\n      }\n\n      /* Indent toggle children */\n      .toggle>li>details {\n        padding-left: 1.7em;\n      }\n\n      .toggle>li>details>summary {\n        margin-left: -1.1em;\n      }\n\n      .selected-value {\n        display: inline-block;\n        padding: 0 0.5em;\n        background: rgba(206, 205, 202, 0.5);\n        border-radius: 3px;\n        margin-right: 0.5em;\n        margin-top: 0.3em;\n        margin-bottom: 0.3em;\n        white-space: nowrap;\n      }\n\n      .collection-title {\n        display: inline-block;\n        margin-right: 1em;\n      }\n\n      .page-description {\n        margin-bottom: 2em;\n      }\n\n      .simple-table {\n        margin-top: 1em;\n        font-size: 0.875rem;\n        empty-cells: show;\n      }\n\n      .simple-table td {\n        height: 29px;\n        min-width: 120px;\n      }\n\n      .simple-table th {\n        height: 29px;\n        min-width: 120px;\n      }\n\n      .simple-table-header-color {\n        background: rgb(247, 246, 243);\n        color: black;\n      }\n\n      .simple-table-header {\n        font-weight: 500;\n      }\n\n      time {\n        opacity: 0.5;\n      }\n\n      .icon {\n        display: inline-block;\n        max-width: 1.2em;\n        max-height: 1.2em;\n        text-decoration: none;\n        vertical-align: text-bottom;\n        margin-right: 0.5em;\n      }\n\n      img.icon {\n        border-radius: 3px;\n      }\n\n      .user-icon {\n        width: 1.5em;\n        height: 1.5em;\n        border-radius: 100%;\n        margin-right: 0.5rem;\n      }\n\n      .user-icon-inner {\n        font-size: 0.8em;\n      }\n\n      .text-icon {\n        border: 1px solid #000;\n        text-align: center;\n      }\n\n      .page-cover-image {\n        display: block;\n        object-fit: cover;\n        width: 100%;\n        max-height: 30vh;\n      }\n\n      .page-header-icon {\n        font-size: 3rem;\n        margin-bottom: 1rem;\n      }\n\n      .page-header-icon-with-cover {\n        margin-top: -0.72em;\n        margin-left: 0.07em;\n      }\n\n      .page-header-icon img {\n        border-radius: 3px;\n      }\n\n      .link-to-page {\n        margin: 1em 0;\n        padding: 0;\n        border: none;\n        font-weight: 500;\n      }\n\n      p>.user {\n        opacity: 0.5;\n      }\n\n      td>.user,\n      td>time {\n        white-space: nowrap;\n      }\n\n      input[type=\"checkbox\"] {\n        transform: scale(1.5);\n        margin-right: 0.6em;\n        vertical-align: middle;\n      }\n\n      p {\n        margin-top: 0.5em;\n        margin-bottom: 0.5em;\n      }\n\n      .image {\n        border: none;\n        margin: 1.5em 0;\n        padding: 0;\n        border-radius: 0;\n        text-align: center;\n      }\n\n      .code,\n      code {\n        background: rgba(135, 131, 120, 0.15);\n        border-radius: 3px;\n        padding: 0.2em 0.4em;\n        border-radius: 3px;\n        font-size: 85%;\n        tab-size: 2;\n      }\n\n      code {\n        color: #eb5757;\n      }\n\n      .code {\n        padding: 1.5em 1em;\n      }\n\n      .code-wrap {\n        white-space: pre-wrap;\n        word-break: break-all;\n      }\n\n      .code>code {\n        background: none;\n        padding: 0;\n        font-size: 100%;\n        color: inherit;\n      }\n\n      blockquote {\n        font-size: 1.25em;\n        margin: 1em 0;\n        padding-left: 1em;\n        border-left: 3px solid rgb(55, 53, 47);\n      }\n\n      .bookmark {\n        text-decoration: none;\n        max-height: 8em;\n        padding: 0;\n        display: flex;\n        width: 100%;\n        align-items: stretch;\n      }\n\n      .bookmark-title {\n        font-size: 0.85em;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        height: 1.75em;\n        white-space: nowrap;\n      }\n\n      .bookmark-text {\n        display: flex;\n        flex-direction: column;\n      }\n\n      .bookmark-info {\n        flex: 4 1 180px;\n        padding: 12px 14px 14px;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n      }\n\n      .bookmark-image {\n        width: 33%;\n        flex: 1 1 180px;\n        display: block;\n        position: relative;\n        object-fit: cover;\n        border-radius: 1px;\n      }\n\n      .bookmark-description {\n        color: rgba(55, 53, 47, 0.6);\n        font-size: 0.75em;\n        overflow: hidden;\n        max-height: 4.5em;\n        word-break: break-word;\n      }\n\n      .bookmark-href {\n        font-size: 0.75em;\n        margin-top: 0.25em;\n      }\n\n      .sans {\n        font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n      }\n\n      .code {\n        font-family: \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace;\n      }\n\n      .serif {\n        font-family: Lyon-Text, Georgia, ui-serif, serif;\n      }\n\n      .mono {\n        font-family: iawriter-mono, Nitti, Menlo, Courier, monospace;\n      }\n\n      .pdf .sans {\n        font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", &apos;Twemoji&apos;, &apos;Noto Color Emoji&apos;, &apos;Noto Sans CJK JP&apos;;\n      }\n\n      .pdf:lang(zh-CN) .sans {\n        font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", &apos;Twemoji&apos;, &apos;Noto Color Emoji&apos;, &apos;Noto Sans CJK SC&apos;;\n      }\n\n      .pdf:lang(zh-TW) .sans {\n        font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", &apos;Twemoji&apos;, &apos;Noto Color Emoji&apos;, &apos;Noto Sans CJK TC&apos;;\n      }\n\n      .pdf:lang(ko-KR) .sans {\n        font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", &apos;Twemoji&apos;, &apos;Noto Color Emoji&apos;, &apos;Noto Sans CJK KR&apos;;\n      }\n\n      .pdf .code {\n        font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, &apos;Twemoji&apos;, &apos;Noto Color Emoji&apos;, &apos;Noto Sans Mono CJK JP&apos;;\n      }\n\n      .pdf:lang(zh-CN) .code {\n        font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, &apos;Twemoji&apos;, &apos;Noto Color Emoji&apos;, &apos;Noto Sans Mono CJK SC&apos;;\n      }\n\n      .pdf:lang(zh-TW) .code {\n        font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, &apos;Twemoji&apos;, &apos;Noto Color Emoji&apos;, &apos;Noto Sans Mono CJK TC&apos;;\n      }\n\n      .pdf:lang(ko-KR) .code {\n        font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, &apos;Twemoji&apos;, &apos;Noto Color Emoji&apos;, &apos;Noto Sans Mono CJK KR&apos;;\n      }\n\n      .pdf .serif {\n        font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, &apos;Twemoji&apos;, &apos;Noto Color Emoji&apos;, &apos;Noto Serif CJK JP&apos;;\n      }\n\n      .pdf:lang(zh-CN) .serif {\n        font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, &apos;Twemoji&apos;, &apos;Noto Color Emoji&apos;, &apos;Noto Serif CJK SC&apos;;\n      }\n\n      .pdf:lang(zh-TW) .serif {\n        font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, &apos;Twemoji&apos;, &apos;Noto Color Emoji&apos;, &apos;Noto Serif CJK TC&apos;;\n      }\n\n      .pdf:lang(ko-KR) .serif {\n        font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, &apos;Twemoji&apos;, &apos;Noto Color Emoji&apos;, &apos;Noto Serif CJK KR&apos;;\n      }\n\n      .pdf .mono {\n        font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, &apos;Twemoji&apos;, &apos;Noto Color Emoji&apos;, &apos;Noto Sans Mono CJK JP&apos;;\n      }\n\n      .pdf:lang(zh-CN) .mono {\n        font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, &apos;Twemoji&apos;, &apos;Noto Color Emoji&apos;, &apos;Noto Sans Mono CJK SC&apos;;\n      }\n\n      .pdf:lang(zh-TW) .mono {\n        font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, &apos;Twemoji&apos;, &apos;Noto Color Emoji&apos;, &apos;Noto Sans Mono CJK TC&apos;;\n      }\n\n      .pdf:lang(ko-KR) .mono {\n        font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, &apos;Twemoji&apos;, &apos;Noto Color Emoji&apos;, &apos;Noto Sans Mono CJK KR&apos;;\n      }\n\n      .highlight-default {\n        color: rgba(55, 53, 47, 1);\n      }\n\n      .highlight-gray {\n        color: rgba(120, 119, 116, 1);\n        fill: rgba(120, 119, 116, 1);\n      }\n\n      .highlight-brown {\n        color: rgba(159, 107, 83, 1);\n        fill: rgba(159, 107, 83, 1);\n      }\n\n      .highlight-orange {\n        color: rgba(217, 115, 13, 1);\n        fill: rgba(217, 115, 13, 1);\n      }\n\n      .highlight-yellow {\n        color: rgba(203, 145, 47, 1);\n        fill: rgba(203, 145, 47, 1);\n      }\n\n      .highlight-teal {\n        color: rgba(68, 131, 97, 1);\n        fill: rgba(68, 131, 97, 1);\n      }\n\n      .highlight-blue {\n        color: rgba(51, 126, 169, 1);\n        fill: rgba(51, 126, 169, 1);\n      }\n\n      .highlight-purple {\n        color: rgba(144, 101, 176, 1);\n        fill: rgba(144, 101, 176, 1);\n      }\n\n      .highlight-pink {\n        color: rgba(193, 76, 138, 1);\n        fill: rgba(193, 76, 138, 1);\n      }\n\n      .highlight-red {\n        color: rgba(212, 76, 71, 1);\n        fill: rgba(212, 76, 71, 1);\n      }\n\n      .highlight-gray_background {\n        background: rgba(241, 241, 239, 1);\n      }\n\n      .highlight-brown_background {\n        background: rgba(244, 238, 238, 1);\n      }\n\n      .highlight-orange_background {\n        background: rgba(251, 236, 221, 1);\n      }\n\n      .highlight-yellow_background {\n        background: rgba(251, 243, 219, 1);\n      }\n\n      .highlight-teal_background {\n        background: rgba(237, 243, 236, 1);\n      }\n\n      .highlight-blue_background {\n        background: rgba(231, 243, 248, 1);\n      }\n\n      .highlight-purple_background {\n        background: rgba(244, 240, 247, 0.8);\n      }\n\n      .highlight-pink_background {\n        background: rgba(249, 238, 243, 0.8);\n      }\n\n      .highlight-red_background {\n        background: rgba(253, 235, 236, 1);\n      }\n\n      .block-color-default {\n        color: inherit;\n        fill: inherit;\n      }\n\n      .block-color-gray {\n        color: rgba(120, 119, 116, 1);\n        fill: rgba(120, 119, 116, 1);\n      }\n\n      .block-color-brown {\n        color: rgba(159, 107, 83, 1);\n        fill: rgba(159, 107, 83, 1);\n      }\n\n      .block-color-orange {\n        color: rgba(217, 115, 13, 1);\n        fill: rgba(217, 115, 13, 1);\n      }\n\n      .block-color-yellow {\n        color: rgba(203, 145, 47, 1);\n        fill: rgba(203, 145, 47, 1);\n      }\n\n      .block-color-teal {\n        color: rgba(68, 131, 97, 1);\n        fill: rgba(68, 131, 97, 1);\n      }\n\n      .block-color-blue {\n        color: rgba(51, 126, 169, 1);\n        fill: rgba(51, 126, 169, 1);\n      }\n\n      .block-color-purple {\n        color: rgba(144, 101, 176, 1);\n        fill: rgba(144, 101, 176, 1);\n      }\n\n      .block-color-pink {\n        color: rgba(193, 76, 138, 1);\n        fill: rgba(193, 76, 138, 1);\n      }\n\n      .block-color-red {\n        color: rgba(212, 76, 71, 1);\n        fill: rgba(212, 76, 71, 1);\n      }\n\n      .block-color-gray_background {\n        background: rgba(241, 241, 239, 1);\n      }\n\n      .block-color-brown_background {\n        background: rgba(244, 238, 238, 1);\n      }\n\n      .block-color-orange_background {\n        background: rgba(251, 236, 221, 1);\n      }\n\n      .block-color-yellow_background {\n        background: rgba(251, 243, 219, 1);\n      }\n\n      .block-color-teal_background {\n        background: rgba(237, 243, 236, 1);\n      }\n\n      .block-color-blue_background {\n        background: rgba(231, 243, 248, 1);\n      }\n\n      .block-color-purple_background {\n        background: rgba(244, 240, 247, 0.8);\n      }\n\n      .block-color-pink_background {\n        background: rgba(249, 238, 243, 0.8);\n      }\n\n      .block-color-red_background {\n        background: rgba(253, 235, 236, 1);\n      }\n\n      .select-value-color-uiBlue {\n        background-color: rgba(35, 131, 226, .07);\n      }\n\n      .select-value-color-pink {\n        background-color: rgba(245, 224, 233, 1);\n      }\n\n      .select-value-color-purple {\n        background-color: rgba(232, 222, 238, 1);\n      }\n\n      .select-value-color-green {\n        background-color: rgba(219, 237, 219, 1);\n      }\n\n      .select-value-color-gray {\n        background-color: rgba(227, 226, 224, 1);\n      }\n\n      .select-value-color-transparentGray {\n        background-color: rgba(227, 226, 224, 0);\n      }\n\n      .select-value-color-translucentGray {\n        background-color: rgba(255, 255, 255, 0.0375);\n      }\n\n      .select-value-color-orange {\n        background-color: rgba(250, 222, 201, 1);\n      }\n\n      .select-value-color-brown {\n        background-color: rgba(238, 224, 218, 1);\n      }\n\n      .select-value-color-red {\n        background-color: rgba(255, 226, 221, 1);\n      }\n\n      .select-value-color-yellow {\n        background-color: rgba(253, 236, 200, 1);\n      }\n\n      .select-value-color-blue {\n        background-color: rgba(211, 229, 239, 1);\n      }\n\n      .select-value-color-pageGlass {\n        background-color: undefined;\n      }\n\n      .select-value-color-washGlass {\n        background-color: undefined;\n      }\n\n      .checkbox {\n        display: inline-flex;\n        vertical-align: text-bottom;\n        width: 16;\n        height: 16;\n        background-size: 16px;\n        margin-left: 2px;\n        margin-right: 5px;\n      }\n\n      .checkbox-on {\n        background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E\");\n      }\n\n      .checkbox-off {\n        background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E\");\n      }\n    "
    }}
  />
  <article id="2198578c-c14b-418c-be56-72187798872a" className="page sans">
    <header>
      <h1 className="page-title">
        <strong>Wellness Retreat - Nepal 2024</strong>
      </h1>
      <p className="page-description" />
    </header>
    <div className="page-body">
      <p id="babe29ed-abce-4e7a-8bba-b945f0b35aab" className="">
        Wednesday, 27th MARCH 2024.
      </p>
      <p id="8093d472-ce9c-46c6-9061-622118112dbc" className="">
        <strong>Disclaimer:</strong>
      </p>
      <p id="152bbffb-8a25-4be0-b7ad-2cfa0ecb7eca" className="">
        Please don’t find anything hurtful, Even if I mention a negative trait
        it’s not negative for me. And by the looks of it, it’ll take a couple of
        minutes to read. I don&apos;t want ANYBODY to reply to me, or talk about this
        letter with me. You can discuss this among yourselves. Share it use it
        however you want.
      </p>
      <p id="735099f2-a4c2-48f8-a776-fbf3f9284e55" className="">
        I am Shriyans Kapoor, a student for life, and professionally I have been
        a software engineer and graduated from a silly college, I don’t work for
        Dr. Sharon, and wasn’t directly a part of this wellness retreat of
        Exprimir101 Clinic. But I’d still like to say a couple of things that I
        have personally felt.
      </p>
      <p id="1775484f-df51-4a30-a4a0-9babd6118866" className="">
        <br />
        <br />
        <strong>To the People of peace and love,</strong>
      </p>
      <p id="4da52965-b311-4931-b392-824cddf7b795" className="">
        <strong>Prologue:</strong>
      </p>
      <p id="e9388662-0e1b-462e-a021-a48c80279c83" className="">
        My father taught me (among countless things) to always find good things
        to learn from every living and non-living being on this planet. There’s
        no limit to the bad things you can learn, good things, however, are
        limited. And most importantly, Learning isn’t done when the teacher
        teaches, it’s done when the student is ready. So to learn, you just have
        to be ready at any single moment in time. So easy!
      </p>
      <p id="341122e5-6e3c-49bc-a95b-5bdda090000a" className="">
        <strong>Main:</strong>
      </p>
      <p id="5f915920-b0c2-46f4-a30a-ec147902d2ba" className="">
        I was caught off guard when I was asked to speak at the last dinner by
        Ernest, I was shaking because even in college I never took an impromptu
        task.
      </p>
      <p id="ffb69297-b435-48b2-8769-221ede9f1eba" className="">
        I have been hearing a lot about Dr Sharon, Her Husband Ernest and Her
        brother Chris since the time my dear friend Dr. Swati Rao joined
        Exprimir101. I mean Day 1. (Yes Dr. Sharon I even know when you scold
        the living hell out of her :p). But to hear about someone is one thing,
        you can’t appreciate as much. And after my personal experience, I wanna
        say: <br />
        <br />
      </p>
      <p id="02e0e2db-51f4-402a-b9cb-1e52030fd27d" className="">
        Dr. Sharon, I first got to experience your personality when Swati missed
        some days. I found that Swati was not scared of you out of fear but out
        of respect. That made me smile. You are an amazing mother (as I felt
        from our conversation about your sons IELTS exam). I feel that you care
        deeply about what you’ve built from the ground up and I am sure you
        won’t ever compromise on its quality. I observed you worrying about your
        individual patient’s knees when playing games to everyone’s comfort at
        the resort and everything in between. I am sure Jake (a very cute name)
        will have all the inspiration right at home. Even though you seemed
        extremely friendly and joyful and easy, I know off vacation you’re as
        stringent and hardcore a leader as it gets. My mother is like that too,
        Dr. Anuradha Kapoor. Because of her, I have the utmost respect for the
        medical profession. I don’t have to suck up to you Dr. Sharon, But I
        wish I had to. ^_^. I learned Discipline from you. I wish you luck with
        everything you do. Also VERY VERY PRETTY YOU ARE.
      </p>
      <p id="a3763171-3eb9-418f-ac85-36f7cd3aa9a5" className="" />
      <p id="2b1509e1-b944-4c7a-8629-6d0d98b5f479" className="">
        Talking about being really pretty, Hello Ernest, I have seen you in
        person for the first time, given that you look like MAUI from the Disney
        movie Moana, so intimidating, But in reality you are just a pure joyous
        kid. Watching you eat, I want to eat everything I want, and work hard to
        burn it off, rather than compromising. Pel ke Khaunga!!! I wish to have
        at least some training sessions under you, Swati Rao has been pestering
        me since ages to meet you but I’ve been a lazy bum. She suggested that
        for my style of workout, you fit the best. I hope to see you soon. But
        Most importantly, I learned how important it is to appreciate everything
        in life just by observing you talk. Everyone is so important, Everyone
        means so much, and everything in existence is magical and needs to be
        appreciated. Appreciate doesn’t mean let’s talk “good” about it, it’s a
        feeling deep within. I am truly grateful just for my existence. Thank
        you Ernest. The question about whether god exists or not doesn’t matter,
        as long as we treat each other as gods. Also, Ernest, Your outfits I
        very much dig. I don’t even think you try to look like a Disney
        character, but you do, Someone should star you in Disney. If I were a
        baby and I saw you, I think I’d poop my pants and laugh. Alas, I SHALL
        EAT GHEE AND BURN IT OFF.
      </p>
      <p id="d45c92cc-a197-42fa-b72c-0c4894e35984" className="" />
      <p id="283af3e1-b755-4232-ab3d-ed2f3ec61892" className="">
        Dear Dear Dear Chris, You became important to me from the moment you
        stayed with me at the Nepal airport, where I got stuck because of my
        silly mistake (yeah Ernest mai Yeda hu *sighs*). So far away from home
        helpless at the time and scared and vulnerable, I had 0 contact with my
        family and friends at that time. I felt at home the minute you stayed
        with me and helped me out. I just cannot express how deeply I felt for
        you at that moment and every other. Ask Dr. Swati (swati Rao wahi). I
        love the passion you have for your music, I wish to find such passion in
        my life. I do. I have seen you just focusing on your thing in the middle
        of chaos. Please keep making great music. I learned to find and follow
        my passion from you. It’s not impossible. p.s. I love the orientation of
        your teeth.. smile please right now. For the sake? Hello? SMILE? …. are
        you? HEY! I saw it!
      </p>
      <p id="e5e46074-a991-4ab7-b015-7e09f88b9644" className="" />
      <p id="589dcfee-7934-489c-8215-9957681c296b" className="">
        Mr Mukesh, How do you know so much about the world? your stories
        intrigue me, I have been to many countries and I still can’t talk about
        them because I never paid attention to things as much as you do. I saw
        you observing a flower at Mr. Anand’s house and it all clicked. You
        taught me attention. Everything in life is immensely interesting if you
        look closely. if at your age I do not have this energy and intrigue, I
        might as well have failed. You are the GENZ I want to be. I also love
        your voice. That enthusiasm could be draining for someone like me, who
        cannot deal with extra energy. But, I will try to always. You’re a
        pretty baby inside. ^_^
      </p>
      <p id="df82c494-326e-48f0-b098-e5db131ad671" className="" />
      <p id="9a86e0d8-8324-4855-99e2-eca22b3936e4" className="">
        Aman, you’re a gorgeous person, I will not believe you’re older than me.
        Some genes you’ve got MA BOYYYY. I will meet you again,&nbsp;Ping Rao
        and I’ll be always reachable at 247. Wish we had more time to talk and
        connect. I learned from you that it’s not a matter of being an introvert
        or an extra or an ambi or whatever. You talk like everyone’s your
        friend. You do you. I will try to do that too. Please keep smiling, and
        take care of that gorgeous hair.
      </p>
      <p id="db6f0184-1820-46cb-9b87-25c894d451af" className="" />
      <p id="0972dab9-b730-49fb-8d64-f09cf779ba1c" className="">
        Namita, you’re a wonderful woman. Being your roommate was fun, I
        couldn’t believe it when Swati said you’re a mother, my first thought
        was I def don’t deserve to be a parent, unless I matched “her” energy,
        responsibility and , and her pretty face. Trying to catch up with your
        pace at the trek, was fun, and I loved the “non-taxing, non-small, not
        unnecessary talks we had”. They were enough to keep us going. I loved
        walking next to you with that cute dog. I love how you have this deep
        sincerity in you, but a calm exterior. I will try to be more sturdy. I
        learned to be as strong as F from you. You are strength for me.
      </p>
      <p id="750a3f0a-688c-40f5-a3a6-072eadcf84e6" className="" />
      <p id="bf135b94-5062-4dc0-b66f-1cb8e8c2bca2" className="">
        Mr Anand, your patience with 10000000x varied questions, leaves me
        baffled. My father is a yogi, I learned pranayama and many things from
        him, he is a drilling oil engineer in Kuwait in the profession but a kid
        at his soul. I wish he could meet you, I will let him know. Tolerance
        has a negative connotation, but I don’t think it’s negative. I believe
        that tolerance is a great quality - Acceptance, I learned that from you.
        If you can’t deal with things beyond your comfort zone, then you might
        as well…. I was gonna say die, but I’d say tolerate. Those cards, I
        don’t believe in, but I do believe everything that was read out
        resonates with every one of us. I learned tolerance from you.
      </p>
      <p id="0a4ed07c-5c9f-4460-a0b6-daf110f5f6c5" className="" />
      <p id="8f7acc43-ad48-4df0-88b7-1a1c4b53bff0" className="">
        Everybody else, 4 days were too short for my silly little brain to
        comprehend every good thing you brought to the table, I’ll be around.
        Please keep working hard. The Exprimir101 Trio and every staff that
        works at this place is amazing. I know how It could get tough sometimes,
        but you push each other to be a better self. Remember, The only way out
        is through.
      </p>
      <p id="5bf1275f-874e-4b71-b913-5e2cb1434c5c" className="" />
      <p id="d0a8a749-e10a-4370-b74d-5090d514575e" className="">
        p.s. My body is still sore, and I am so happy about it. It was a
        vacation well spent. I had a great time, Right from the beginning till
        the very end.
      </p>
      <p id="cf000ae9-3d5d-4337-b8ac-a04dc3b071b8" className="">
        Home is a feeling, not a building. Thank you, Dr Swati Rao, for inviting
        me to this experience. I learn from you every day.
      </p>
      <p id="2c20a764-68c0-4c17-b21f-4479dff92534" className="" />
      <p id="8eb93d0a-b720-4cce-b2f9-6e00b230ae07" className="">
        <em>###########</em>
      </p>
      <p id="4e5f0ca1-4d52-40ea-a56b-d31e5fcad05d" className="">
        <em>Day by Day you grow,</em>
      </p>
      <p id="13e20761-38a9-4ea2-bdc1-b35223291e97" className="">
        <em>Any change you never know</em>
      </p>
      <p id="90098c5c-f3e7-4037-b2ff-752695126f6b" className="">
        <em>You want, you need,</em>
      </p>
      <p id="056d3440-6454-4dec-a518-1481151b7635" className="">
        <em>You let it go.</em>
      </p>
      <p id="8f353ce4-971a-42f5-8139-39d768bc7082" className="" />
      <p id="2e649565-6516-4903-ac61-9b0e4f884d71" className="">
        <em>Life is tough if you let it be,</em>
      </p>
      <p id="451e7ecb-ac2f-4266-94ff-64acd8841536" className="">
        <em>The easy comes when you scream Yippie.</em>
      </p>
      <p id="1ea860c1-9643-456e-b7c4-adc5503cd50d" className="">
        <em>No goal in life should be so bold,</em>
      </p>
      <p id="413b98e1-0e6d-4002-bd7d-903a34195364" className="">
        <em>That this moment of truth is kept on hold</em>
      </p>
      <p id="41c1e82b-1624-4e95-9350-0ebcd044f9ed" className="">
        <em>Live now, no choice you got,</em>
      </p>
      <p id="dd987210-938b-4599-8a72-7603e5117867" className="">
        <em>What’s not forgiven, consider forgot</em>
      </p>
      <p id="cb74cfc0-939a-42ae-bc08-b4ad2196e0fa" className="" />
      <p id="a6f25c48-ab37-4f5e-baeb-00f31413cf6f" className="">
        <em>Day by day you grow,</em>
      </p>
      <p id="0a1434cb-21b2-4467-9ae6-3be9823d980b" className="">
        <em>Any change you never know,</em>
      </p>
      <p id="e7ff3bf6-9b17-4b8a-b13f-ab81d6189704" className="">
        <em>You want, you need,</em>
      </p>
      <p id="3f1125ae-4f11-4219-92e3-e2bf61c33fe1" className="">
        <em>Don’t let it go.</em>
      </p>
      <p id="c3cc1fd9-d287-4323-bce2-d0bc0f791822" className="">
        <em>###########</em>
      </p>
      <hr id="999fadc6-ef3b-4523-9682-8a56865a87d2" />
      <p id="d533e604-44be-4efa-8a5e-96912bd515e5" className="">
        <strong>Assertion</strong>: The Domain,&nbsp;{" "}
        <a href="http://exprimir101.com/">Exprimir101.com</a>&nbsp;is under my
        name, for now, Talk to me about how to make it yours —the leadership
        team— and I shall transfer the details. For the next 365 days, I have
        subscribed for this, if you need a different name let me know.
        Everything I said costs 0 to you. I am a minimalist, that influences my
        style of writing and the website.
      </p>
      <p id="a6b8fe27-b55d-46c9-bcd7-b93a6b876c61" className="">
        ———————————————————
      </p>
      <p id="24b1dffc-03b0-4383-a587-cff3602ba6d8" className="">
        <strong>Socials:</strong>
      </p>
      <p id="9e573c64-1051-4347-bd3b-3d785c116657" className="">
        Facebook:&nbsp;{" "}
        <a href="https://www.facebook.com/Exprimir101/">
          https://www.facebook.com/Exprimir101/
        </a>
      </p>
      <p id="51c201da-00eb-4988-b905-cb6f8381f6c2" className="">
        Instagram:&nbsp;{" "}
        <a href="https://www.instagram.com/exprimir101/">
          https://www.instagram.com/exprimir101/
        </a>
      </p>
      <p id="476de812-da09-4a72-a5b3-866a0677baee" className="">
        Facebook:&nbsp;{" "}
        <a href="https://www.facebook.com/Exprimir101/">
          https://www.facebook.com/Exprimir101/
        </a>
      </p>
      <p id="d1cb0b02-ffb8-4751-aa61-e4984a9ae1e7" className="">
        Google Maps:&nbsp;{" "}
        <a href="https://maps.app.goo.gl/FquHqpcpvJB8GV5EA">
          https://maps.app.goo.gl/FquHqpcpvJB8GV5EA
        </a>
        <br />
        Me: <br />
        <a href="https://twitter.com/facinick">https://twitter.com/facinick</a>,
        Say Hellluuu ^_^
      </p>
    </div>
  </article>
  <span className="sans" style={{ fontSize: 14, paddingTop: "2em" }} />
</>

      </div>
    </>
  );
}
