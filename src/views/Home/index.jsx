import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import shoeBackground from "../../assets/shoe-background.jpg";
import shoeBoxes from "../../assets/shoe-boxes.jpg";
import shoeHappy from "../../assets/shoe-happy.jpg";
import shoeInventory from "../../assets/shoe-inventory.jpg";
import shoeStressed from "../../assets/shoe-stressed.jpg";
import shoeYeezy from "../../assets/shoe-yeezy.png";
import shoeJordan1 from "../../assets/shoe-jordan1.png";
import shoeJordan4 from "../../assets/shoe-jordan4.png";
import shoeDunk from "../../assets/shoe-dunkp.png";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  const { scrollY } = useViewportScroll();
  const yeezyPosition = useTransform(scrollY, [0, 400], ["fixed", "absolute"]);
  const yeezyOpacity = useTransform(scrollY, [0, 700], [1, 0]);

  const jordan1Position = useTransform(
    scrollY,
    [400, 800],
    ["fixed", "absolute"]
  );
  const jordan1Opacity = useTransform(scrollY, [400, 1100, 1700], [0, 1, 0]);

  const jordan4Position = useTransform(
    scrollY,
    [800, 1200],
    ["fixed", "absolute"]
  );
  const jordan4Opacity = useTransform(scrollY, [800, 1500, 2000], [0, 1, 0]);

  const dunkPosition = useTransform(
    scrollY,
    [1200, 1600],
    ["fixed", "absolute"]
  );
  const dunkOpacity = useTransform(scrollY, [1900, 2400], [0, 1]);

  return (
    <div className="py-5">
      <motion.div
        style={{
          position: "fixed",
          top: "2%",
          left: 0,
          opacity: yeezyOpacity,
        }}
      >
        <img src={shoeYeezy} alt="Shoe Yeezy" style={{ width: "150px" }} />
      </motion.div>

      <motion.div
        style={{
          position: "fixed",
          top: "50%",
          right: 0,
          opacity: jordan1Opacity,
        }}
      >
        <img src={shoeJordan1} alt="Shoe Jordan 1" style={{ width: "150px" }} />
      </motion.div>

      <motion.div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          opacity: jordan4Opacity,
        }}
      >
        <img src={shoeJordan4} alt="Shoe Jordan 4" style={{ width: "150px" }} />
      </motion.div>

      <motion.div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          opacity: dunkOpacity,
        }}
      >
        <img src={shoeDunk} alt="Shoe Dunk" style={{ width: "150px" }} />
      </motion.div>

      <div className="position-relative">
        <img
          src={shoeBackground}
          alt="Shoe Background"
          className="img-fluid w-100 rounded"
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <Container>
            <p
              className="display-1"
              style={{ fontSize: "600%", color: "Yellow", fontWeight: "bold" }}
            >
              Your solution to keeping track of your shoe collection
            </p>
          </Container>
        </div>
      </div>

      <div className="py-5 bg-light">
        <Container>
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div>
                <h2 style={{ fontSize: "700%" }}>Shoe Stressed?</h2>
                <p style={{ fontSize: "400%" }}>
                  Don't know how to manage and keep track of your shoe
                  collection? We can help! Be ...
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={shoeStressed}
                alt="Shoe Inventory"
                className="img-fluid"
              />
            </div>
          </div>
        </Container>
      </div>

      <div className="py-5">
        <Container>
          <div className="row">
            <div className="col-lg-6 order-lg-2 d-flex align-items-center">
              <div>
                <h2 style={{ fontSize: "700%" }}>Shoe Happy!</h2>
                <p style={{ fontSize: "300%" }}>
                  Experience the joy of easily managing your business or
                  collection.
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <img src={shoeHappy} alt="Shoe Happy" className="img-fluid" />
            </div>
          </div>
        </Container>
      </div>

      <div className="py-5">
        <Container>
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div>
                <h2 style={{ fontSize: "700%" }}>Shoe Organized</h2>
                <p style={{ fontSize: "300%" }}>
                  Customize how you want to manage your shoes!
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <img src={shoeInventory} alt="Shoe Happy" className="img-fluid" />
            </div>
          </div>
        </Container>
      </div>

      <div className="py-5 bg-light">
        <Container>
          <div className="row">
            <div className="col-lg-6 order-lg-2 d-flex align-items-center">
              <div>
                <h2 style={{ fontSize: "700%" }}>Shoe Inventory</h2>
                <p style={{ fontSize: "400%" }}>
                  Keep track of your shoe collection with our inventory
                  management system.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={shoeBoxes} alt="Shoe Inventory" className="img-fluid" />
            </div>
          </div>
        </Container>
      </div>

      <div className="py-5 bg-light">
        <Container>
          <div className="row">
            <div className="d-flex align-items-center">
              <div>
                <h2 style={{ fontSize: "500%" }}>
                  Take control and manage your inventory
                </h2>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <Link to="/register">
                    <Button variant="primary" size="lg" className="me-sm-2">
                      Sign Up
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="outline-primary" size="lg">
                      Sign In
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">{/* No image for this section */}</div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
