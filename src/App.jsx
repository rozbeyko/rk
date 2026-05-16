import React from 'react';
import { useHashRoute, Nav, Footer, PageTitle } from './ui.jsx';
import { DRAFT_PATHS } from './data.js';
import { HomePage, AboutPage, NowPage, ContactPage } from './pages-home.jsx';
import { WorkPage } from './pages-cv.jsx';
import { CasesPage, CaseDetail } from './pages-cases.jsx';
import {
  MaintraPage, CreatorPage, SpeakingPage,
  ReadingPage, KindPage, WritingPage, PostDetail,
} from './pages-side.jsx';

function NotFound() {
  return (
    <main className="page">
      <div className="container">
        <PageTitle
          crumb={[{ label: '404' }]}
          title='Nothing <em>here.</em>'
          lede="Whatever you were looking for isn't on this URL. The nav above will get you somewhere useful."
        />
        <a className="link" href="#/home">← Back home</a>
      </div>
    </main>
  );
}

export default function App() {
  const { page, sub } = useHashRoute();

  let view;
  if (import.meta.env.PROD && DRAFT_PATHS.has(page)) {
    return (
      <div className="shell">
        <Nav />
        <NotFound />
        <Footer />
      </div>
    );
  }
  switch (page) {
    case 'home':     view = <HomePage />; break;
    case 'about':    view = <AboutPage />; break;
    case 'work':     view = <WorkPage />; break;
    case 'cases':    view = <CasesPage />; break;
    case 'case':     view = <CaseDetail slug={sub} />; break;
    case 'maintra':  view = <MaintraPage />; break;
    case 'creator': view = <CreatorPage />; break;
    case 'now':      view = <NowPage />; break;
    case 'writing':  view = <WritingPage />; break;
    case 'post':     view = <PostDetail slug={sub} />; break;
    case 'speaking': view = <SpeakingPage />; break;
    case 'reading':  view = <ReadingPage />; break;
    case 'kind':     view = <KindPage />; break;
    case 'contact':  view = <ContactPage />; break;
    default:         view = <NotFound />; break;
  }

  return (
    <div className="shell">
      <Nav />
      {view}
      <Footer />
    </div>
  );
}
