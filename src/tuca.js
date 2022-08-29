const Collision = {
    // Elastic collisions refer to the simple cast where
    // two entities collide and a transfer of energy is
    // performed
    elastic: (restitution) => {
        this.restitution = restitution || .2;
    }
};