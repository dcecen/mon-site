/* global React, ReactDOM */
const { useState: useStateA, useEffect: useEffectA } = React;

// Legacy route aliases — old links #/conseil etc → redirect to expertises
const LEGACY_ALIASES = {
  conseil:     'expertises',
  ingenierie:  'expertises',
  maintenance: 'expertises',
};

function parseHash() {
  const raw = (window.location.hash || '').replace(/^#\/?/, '');
  if (!raw) return { page: 'home', filter: 'all' };
  const [base, query] = raw.split('?');
  const params = new URLSearchParams(query || '');
  let page = base;
  if (LEGACY_ALIASES[page]) page = LEGACY_ALIASES[page];
  if (!NAV.some(n => n.id === page)) page = 'home';
  return {
    page,
    filter: params.get('cat') || 'all',
  };
}

function App() {
  const [{ page, filter }, setRoute] = useStateA(() => parseHash());

  useEffectA(() => {
    function fromHash() { setRoute(parseHash()); }
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, []);

  function navigate(id) {
    let target = id;
    let cat = 'all';
    if (id.startsWith('projets:')) {
      cat = id.split(':')[1] || 'all';
      target = 'projets';
    }
    if (LEGACY_ALIASES[target]) target = LEGACY_ALIASES[target];

    const hash = cat !== 'all' ? `#/${target}?cat=${cat}` : `#/${target}`;
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    } else {
      setRoute({ page: target, filter: cat });
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  let Content;
  switch (page) {
    case 'home':        Content = <HomePage onNavigate={navigate} />; break;
    case 'expertises':  Content = <ExpertisesPage onNavigate={navigate} />; break;
    case 'gestion':     Content = <GestionPage onNavigate={navigate} />; break;
    case 'logiciels':   Content = <LogicielsPage onNavigate={navigate} />; break;
    case 'projets':     Content = <ProjetsPage onNavigate={navigate} defaultFilter={filter} />; break;
    case 'contact':     Content = <ContactPage onNavigate={navigate} />; break;
    default:            Content = <HomePage onNavigate={navigate} />;
  }

  return (
    <div data-screen-label={`page · ${page}`} className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header current={page} onNavigate={navigate} />
      <main className="flex-1">
        {Content}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
