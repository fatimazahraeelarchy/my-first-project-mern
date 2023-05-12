import React from 'react'
import { NavLink } from 'react-router-dom'
const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className="lead mb-4">Laayoune Cake est une entreprise qui se spécialise dans la préparation et la vente de gâteaux. Elle propose une variété de gâteaux allant des classiques aux plus créatifs pour répondre aux besoins et aux préférences de tous les clients. Les gâteaux peuvent être préparés pour différentes occasions, telles que les mariages, les anniversaires, les fêtes et autres événements.

              Laayoune Cake s'efforce de fournir des gâteaux de qualité supérieure en utilisant des ingrédients frais et de haute qualité. Les recettes sont préparées avec soin pour offrir des gâteaux savoureux et bien présentés. L'entreprise est soucieuse de la satisfaction de sa clientèle et travaille en étroite collaboration avec les clients pour répondre à leurs besoins spécifiques.

              Laayoune Cake peut également proposer des options de personnalisation, telles que des décorations sur mesure, des saveurs personnalisées et des options de taille. Les clients peuvent passer leur commande en ligne ou en magasin et bénéficier d'un service de livraison rapide et fiable. Avec Laayoune Cake, les clients peuvent être assurés de recevoir des gâteaux de qualité exceptionnelle pour tous leurs besoins de célébration.</p>
          <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>
          <div className="col-md-6 py-5 d-flex justify-content-center">
            <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About