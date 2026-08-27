# Contexto del Proyecto: Landing Page & Portafolio Personal

## Perfil & Datos del Desarrollador
- **Nombre**: Andrés Felipe Cortés Zambrano
- **Email**: afcortes.dev@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/andr%C3%A9s-felipe-cort%C3%A9s-zambrano-b01310283/
- **GitHub**: https://github.com/Facz21
- **Rol Principal**: Full-Stack Developer, AI Engineer & Data Analyst
- **Experiencia**: 5+ años en desarrollo de software, arquitectura de APIs, sistemas de IA y análisis de datos.
- **Idiomas**: Español (Nativo), Inglés (C2 Bilingüe fluido).
- **Enfoque Técnico**: Clean Architecture, sistemas inteligentes impulsados por IA (RAG/LLMs), interfaces reactivas en React y analítica de datos accionable.

---

## Stack Tecnológico del Portafolio
- **Framework Web**: TanStack Start / React 19 / TypeScript / Vite 8 / Nitro.
- **Enrutamiento**: TanStack React Router (`file-based routing`).
- **Internacionalización**: Contexto i18n nativo reactivo (Español / Inglés) con persistencia y selector dinámico.
- **Estilos & UI**: Tailwind CSS v4, Radix UI primitives, Lucide Icons.
- **Colores & Tema**: Sistema de diseño en OKLCH (`--accent` cian neón, `--accent-2` violeta/magenta, fondo oscuro deep space).

---

## Lo que se ha implementado hasta ahora

1. **Identidad & Branding**:
   - Nombre **Andrés Cortés** en tamaño grande y jerarquía destacada en `src/components/portfolio/Hero.tsx`.
   - Logo en Navbar: `andres.cortes`.
   - Metadatos SEO, Open Graph y títulos en `src/routes/index.tsx` y `src/routes/__root.tsx`.
   - Copyright en `src/components/portfolio/Footer.tsx`.

2. **Sección Sobre Mí (`About.tsx`)**:
   - Biografía equilibrada que cubre Full-Stack (.NET/Python), Frontend (React), AI Engineering y Análisis de Datos.
   - 5 tarjetas de aspectos destacados (AI Systems, React Frontend, Data Insights, Formación RIWI/Universidad, Bilingüe C2).
   - Widget interactivo estilo terminal (`andres_profile.ts`) que equilibra la altura exacta con las tarjetas de la derecha.

3. **Sección de Habilidades (`Skills.tsx`)**:
   - 6 tarjetas uniformes en cuadrícula simétrica 2x3:
     1. **AI Engineering & LLMs** (LLM APIs, RAG, Semantic Kernel/LangChain, Vector DBs, AI Agents).
     2. **Backend & API Architecture** (C#/.NET 8, Python/FastAPI, Clean Architecture, EF Core/Dapper, JWT).
     3. **Frontend & React** (React, Next.js, TypeScript, Tailwind CSS, Vite, UI accesible).
     4. **Data Analytics & Insights** (Pandas, NumPy, SQL Optimization, ETL, Dashboards, Estadísticas).
     5. **Cloud & DevOps** (Docker, GitHub Actions, Linux Xubuntu/Xfce, Fish Shell, Cloud/Edge).
     6. **Databases & Performance** (PostgreSQL/SQL Server, Redis, WebSockets, Performance Tuning).
   - Efectos visuales: Glow line superior en hover, iluminación ambiental radial, tags con micro-puntos e índices numerados (`01` - `06`).

4. **Fondo Dinámico & Animaciones (`ParallaxBackground.tsx` & `use-scroll-reveal.ts`)**:
   - Fondo Tech Grid que se desliza suavemente en paralaje vertical conforme se hace scroll.
   - Orbes de luz difusa (cian y violeta) con movimiento en contra-desplazamiento para dar profundidad 3D.
   - Animaciones de revelado suave (`useScrollReveal` con `IntersectionObserver`) en cada sección.
   - Espaciados verticales optimizados entre secciones (`py-14 sm:py-16`).

5. **Sección de Contacto Directo (`Contact.tsx`)**:
   - Enlaces directos y minimalistas con píldoras interactivas a:
     - **Email** (`afcortes.dev@gmail.com`) con botón de copiado rápido al portapapeles y toast.
     - **LinkedIn** (`in/andrés-felipe-cortés-zambrano-b01310283`).
     - **GitHub** (`@Facz21`).

6. **Botón Flotante "Volver Arriba" (`ScrollToTop.tsx`)**:
   - Aparece suavemente al hacer scroll hacia abajo (> 350px).
   - Animación de desvanecimiento, estilo neón y scroll suave al hacer clic.
   - Botón de descarga de CV retirado del Hero para mantener un diseño conciso enfocado en proyectos.

7. **Despliegue & CI/CD en GitHub Pages (`.github/workflows/deploy.yml`)**:
   - Pipeline automatizado de GitHub Actions en cada `git push` a `main`.
   - Script generador estático `scripts/build-gh-pages.js` que renderiza el HTML completo (`index.html`, `404.html`, `.nojekyll`) a partir de la compilación de Nitro.
   - Compatible tanto con subrutas de GitHub Pages (`https://facz21.github.io/MyLandingPage/`) como con dominios personalizados.

---

## Proximo Paso: Los 3 Proyectos a Desarrollar y Desplegar

Hemos seleccionado los siguientes 3 proyectos para construir, desplegar y destacar en la sección **Projects**:

1. **Proyecto 1: Plataforma RAG Inteligente con Búsqueda Vectorial (`pgvector`) & Asistente IA**
   - *Objetivo*: Subir documentos/código, vectorizarlos y chatear con un asistente con citas de fuentes y streaming.
   - *Stack*: Python (FastAPI) o .NET 8 (Semantic Kernel) + React + PostgreSQL (`pgvector`) + OpenAI/Gemini.
   - *Despliegue*: Frontend en Vercel, Backend en Render/Railway, BD en Neon Postgres.

2. **Proyecto 2: Dashboard Analítico en Tiempo Real con Pipeline ETL**
   - *Objetivo*: Ingesta de datos en vivo, procesamiento estadístico con Pandas/Python, caching con Redis y visualización interactiva.
   - *Stack*: Python (Pandas) + .NET 8 Web API + Redis + React (Recharts / WebSockets).
   - *Despliegue*: Vercel + Railway / Render.

3. **Proyecto 3: Agente Autónomo de Automatización / DevTools con Function Calling**
   - *Objetivo*: Agente que analiza código, repositorios o bases de datos y ejecuta acciones automáticas (tool calling).
   - *Stack*: Semantic Kernel / LangGraph + Docker + React UI para ver ejecución paso a paso.

---

## Comandos Útiles

```bash
# Iniciar servidor de desarrollo en local
npm run dev

# Compilar para producción (SSR + Cliente)
npm run build

# Compilar y exportar para GitHub Pages (estático con HTML pre-renderizado)
npm run build:gh-pages

# Previsualizar build de producción
npm run preview
```
