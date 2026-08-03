import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { usePageMeta } from "@/hooks/usePageMeta";
import { asset } from "@/lib/asset";
import { CAL_COM_URL } from "@/lib/links";
import { Menu, X, Calendar, User, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Blog() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  usePageMeta({
    title: "Blog | E-Language",
    description:
      "Estrategias, metodología y consejos prácticos para dominar el inglés profesional y avanzar en tu carrera.",
    path: "/blog",
  });

  const handleGoHome = () => {
    setLocation("/");
  };

  const posts = [
    {
      id: 2,
      slug: "limitaciones-estrategia-comunicar-soluciones-ingles",
      title: "De las Limitaciones a la Estrategia: El Arte de Comunicar Soluciones en Inglés",
      excerpt: "Aprende el Método PSR (Problem - Solution - Result): la estructura lógica definitiva para diagnosticar un hecho en la oficina, proponer la solución más viable y proyectar el beneficio estratégico con total autoridad.",
      date: "22 de junio, 2024",
      author: "Paulina González",
      category: "Estrategia",
      readTime: "6 min de lectura",
    },
    {
      id: 1,
      slug: "estructura-agilidad-ingles-oficina",
      title: "El secreto del inglés ejecutivo: Get + lógica contable",
      excerpt: "En el entorno corporativo global, la comunicación no es solo una cuestión de vocabulario; es una cuestión de arquitectura mental. Descubre cómo simplificar tu comunicación y dominar los tiempos verbales con lógica contable.",
      date: "15 de junio, 2024",
      author: "Paulina González",
      category: "Metodología",
      readTime: "5 min de lectura",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <button onClick={handleGoHome} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
            <img src={asset("images/logo.png")} alt="E-Language Isotipo" className="w-10 h-10" />
            <span className="font-bold text-lg text-blue-900">E-Language</span>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={handleGoHome} className="text-sm text-gray-600 hover:text-blue-900 transition">Inicio</button>
            <button onClick={() => setLocation("/metodologia")} className="text-sm text-gray-600 hover:text-blue-900 transition">Metodología</button>
            <button onClick={() => setLocation("/certificacion")} className="text-sm text-gray-600 hover:text-blue-900 transition">Certificación</button>
            <button onClick={() => setLocation("/empresas")} className="text-sm text-gray-600 hover:text-blue-900 transition">Para Empresas</button>
            <button onClick={() => setLocation("/fundadora")} className="text-sm text-gray-600 hover:text-blue-900 transition">Fundadora</button>
            <a href="#" className="text-sm text-blue-900 font-semibold">Blog</a>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
              aria-label="Abrir menú"
            >
              {menuOpen ? <X className="w-6 h-6 text-blue-900" /> : <Menu className="w-6 h-6 text-blue-900" />}
            </button>
            <a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer" className="hidden md:block">
              <Button className="bg-red-500 hover:bg-red-600 text-white">Agenda tu diagnóstico</Button>
            </a>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container py-4 space-y-3">
              <button onClick={() => { handleGoHome(); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Inicio</button>
              <button onClick={() => { setLocation("/metodologia"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Metodología</button>
              <button onClick={() => { setLocation("/certificacion"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Certificación</button>
              <button onClick={() => { setLocation("/empresas"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Para Empresas</button>
              <button onClick={() => { setLocation("/fundadora"); setMenuOpen(false); }} className="block text-sm text-gray-600 hover:text-blue-900 transition py-2 w-full text-left">Fundadora</button>
              <a href="#" onClick={() => setMenuOpen(false)} className="block text-sm text-blue-900 font-semibold py-2">Blog</a>
              <a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Agenda tu diagnóstico</Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog E-Language</h1>
            <p className="text-lg text-blue-100">
              Estrategias, metodología y consejos prácticos para dominar el inglés profesional y avanzar en tu carrera.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Post Image */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 flex items-center justify-center h-48">
                  <img src={asset("images/logo.png")} alt={post.title} className="w-24 h-24 opacity-80" loading="lazy" />
                </div>
                
                {/* Post Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-2 hover:text-blue-700 transition">
                    {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta Information */}
                  <div className="space-y-2 mb-4 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="text-gray-600">
                      {post.readTime}
                    </div>
                  </div>
                  
                  {/* Read More Button */}
                  <button
                    onClick={() => setLocation(`/blog/${post.slug}`)}
                    className="w-full flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-semibold text-sm"
                  >
                    Leer Artículo
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">¿Listo para transformar tu inglés?</h2>
            <p className="text-gray-700 mb-8">
              Descubre cómo nuestra metodología te ayudará a dominar el inglés profesional y avanzar en tu carrera.
            </p>
            <a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                Agenda tu Diagnostico
              </Button>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
