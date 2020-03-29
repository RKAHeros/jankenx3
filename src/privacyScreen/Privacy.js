import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 30px;
  div{
    width: 95%;
    margin: 0 auto;
    span{
      border-bottom: 1px solid #000;
    }
  }
`

const Privacy = () => {
  return (
    <Wrapper>
      <div>
        <h1>プライバシーポリシー</h1>
        <p>Ren Kuriyama（以下，「運営者」といいます。）は，「じゃんけんx3」（以下,「本アプリ」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。</p>
        
        <p>なお、本ポリシーにおいて、「利用者情報」とは、お客様の識別に係る情報、通信サービス上の行動履歴、その他お客様のスマートフォンにおいてお客様と結びついた形で生成、利用又は蓄積されている情報を指します。</p>
        
        <h2>広告について</h2>
        <p>本アプリでは、広告配信ツールとしてAdMob(Google Inc.)を使用しており、AdMobがご利用者の情報を自動取得する場合がございます。取得する情報、利用目的、第三者への提供等につきましては、以下の広告配信事業者のアプリケーション・プライバシーポリシーのリンクよりご確認ください。</p>
        <p>Google 広告に関するポリシー</p>
        <a href="https://policies.google.com/technologies/ads?hl=ja">https://policies.google.com/technologies/ads?hl=ja</a>

        <h2>利用状況解析ついて</h2>
        <p>本アプリでは、今後の開発の参考とするため、アプリの利用状況データを収集するツールとしてFirebase(Google Inc.)を使用しており、Firebaseがご利用者の情報を自動取得する場合がございます。取得する情報、利用目的、第三者への提供等につきましては、以下のGoogleプライバシーポリシーのリンクよりご確認ください。</p>
        <p>Google プライバシーポリシー</p>
        <a href="https://policies.google.com/privacy?hl=ja">https://policies.google.com/privacy?hl=ja</a>

        <h2>その他</h2>
        <p>問い合わせで取得したメールアドレス等の情報は、問い合わせへの回答以外では使用しません。</p>

        <h2>プライバシーポリシーの変更</h2>
        <p>本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。</p>
        <p>運営者が別途定める場合を除いて，変更後のプライバシーポリシーは，本アプリに掲載したときから効力を生じるものとします。</p>
        
        <h2>お問い合わせ</h2>
        <p>本ポリシーに関するお問い合わせは，下記の窓口までお願いいたします。</p>
        <p><span>regou8718@gmail.com</span></p>
      </div>
    </Wrapper>
  )
}

export default Privacy;