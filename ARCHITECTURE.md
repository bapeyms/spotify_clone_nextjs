# Архітектура проекту та Розподіл Компонентів

```mermaid
graph TD
    Src[src] --> App[app/]
    Src --> Components[components/]
    Src --> Context[context/]
    Src --> Data[data/]

    Data --> DHome[homepage/]
    Data --> DSonya[sonyapage/]
    Data --> DLib[mylibrary/]
    Data --> DProf[profile/]

    DHome --- |Містить mock-дані для| H2
    DSonya --- |Містить mock-дані для| S2
    DLib --- |Містить mock-дані для| L2
    DProf --- |Містить mock-дані для| P2

    Context --> AudioCtx["AudioContext.tsx <br/> (Стан аудіо)"]
    Components --> MiniPlayer[MiniPlayer.tsx]
    Components --> Footer[Footer.tsx]
    Components --> Navbar[Navbar.tsx]
    Components --> LeftNav[LeftNavbar.tsx]
    Components --> RightNav[RightNavbar.tsx]

    App --> AppProviders["provider.tsx <br/> (Включає AudioProvider)"]
    App --> AppLayout["layout.tsx (Глобальний)"]
    App --> AppNotFound["not-found.tsx"]

    AppProviders --> |Огортає| AppLayout
    AppProviders -.-> |Містить у собі| AudioCtx

    App --> GAuth["(auth)/"]
    App --> GLand["(landing)/"]
    App --> GDash["(dashboard)/"]
    App --> GPlay["(playlist)/"]

    GLand --> LandLayout["layout.tsx (Landing)"]
    LandLayout --- |Містить тільки| Footer
    LandLayout --> LandPage["page.tsx (Головна)"]

    GDash --> DashLayout["layout.tsx (Dashboard)"]
    DashLayout --- |Включає разом із плеєром| DashComp["[Navbar, LeftNavbar, RightNavbar, Footer, MiniPlayer]"]
    DashLayout --> Home[homepage/]
    DashLayout --> Prof[profile/]

    Home --> H1["page.tsx"]
    Home --> H2["HomePageContent.tsx"]
    Prof --> P1["page.tsx"]
    Prof --> P2["ProfileContent.tsx"]

    GPlay --> PlayLayout["layout.tsx (Playlist)"]
    PlayLayout --- |Включає все, крім RightNav| PlayComp["[Navbar, LeftNavbar, Footer, MiniPlayer]"]
    PlayLayout --> Sonya[sonyapage/]
    PlayLayout --> Lib[mylibrary/]

    Sonya --> S1["page.tsx"]
    Sonya --> S2["SonyaPageContent.tsx"]
    Lib --> L1["page.tsx"]
    Lib --> L2["MyLibraryContent.tsx"]

    DashComp -.-> MiniPlayer
    PlayComp -.-> MiniPlayer
    MiniPlayer -.-> AudioCtx

    GAuth --> AuthLayout["layout.tsx (Auth)"]
    GAuth --> Signin[signin/]
    GAuth --> Signup[signup/]
    GAuth --> Signup1[signup1step/]
    GAuth --> Signup2[signup2step/]

    Signin --- Si["page.tsx <br/> validation.ts <br/> SignInContent.tsx"]
    Signup --- Su["page.tsx <br/> validation.ts <br/> SignUpContent.tsx"]
    Signup1 --- Su1["page.tsx <br/> validation.ts <br/> SignUp1StepContent.tsx"]
    Signup2 --- Su2["page.tsx <br/> validation.ts <br/> SignUp2StepContent.tsx"]

    style Src fill:#f9f,stroke:#333,stroke-width:2px,color:#000
    style Components fill:#e1f5fe,stroke:#0288d1,color:#000
    style Context fill:#fff3e0,stroke:#f57c00,color:#000
    style Data fill:#e8eaf6,stroke:#3f51b5,color:#000
    style AppProviders fill:#e0f2f1,stroke:#004d40,stroke-width:2px,color:#000
    style GAuth fill:#bbf,stroke:#333,color:#000
    style GDash fill:#bfb,stroke:#333,color:#000
    style GPlay fill:#fec,stroke:#333,color:#000
    style GLand fill:#fbb,stroke:#333,color:#000