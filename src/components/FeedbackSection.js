const FeedbackSection = () => (
    <section className="feedback-section bg-light py-5">
      <div className="container">
        <h2 className="text-center text-primary mb-4">Utilisateurs Heureux</h2>
        <p className="text-center text-muted mb-5">Nos clients parlent pour nous.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow mb-4">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User"
                  className="rounded-circle mb-3"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <p>“Un service rapide et efficace. Très satisfait !”</p>
                <h5 className="card-title">Pierre Dupont</h5> 
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow mb-4">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                  alt="User"
                  className="rounded-circle mb-3"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <p>“Un site web très facile à utiliser, je le recommande vivement !”</p>
                <h5 className="card-title">Marie Lefevre</h5> 
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow mb-4">
              <div className="card-body text-center">
                <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="User"
                className="rounded-circle mb-3"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <p>“J'ai trouvé tout ce que je cherchais en quelques clics. Excellent !”</p>
                <h5 className="card-title">Jacques Martin</h5>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
);

export default FeedbackSection;