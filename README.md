# Running the app

1. Ensure Docker is installed on your machine. If not, you can download it from [here](https://www.docker.com/products/docker-desktop).

2. Open a terminal and navigate to the project directory.

3. Run the following command to build and start the services defined in the `docker-compose.yml` file:

4. To run the frontend and backend separately, you can use the following commands:

   - For the frontend:

     ```

     docker build -t nubes-frontend ./nubes/
     docker run -p 3000:3000 nubes-frontend

     ```

   - For the backend:

     ```

     docker build -t nubes-backend ./nubes-back/
     docker run -p 8080:8080 nubes-backend

     ```

    ## Project Architecture and Purpose

     This project is a web-based application, architected into two primary components: the client-side frontend and the server-side backend. Both components are encapsulated within Docker containers, promoting a platform-agnostic setup, seamless deployment, and efficient distribution.

     The frontend, housed in the `nubes` directory, is a Next.js application. It is tasked with rendering the user interface and managing user interactions. The application operates on port 3000 and is constructed using the Dockerfile within the same directory. This Dockerfile delineates the process to create the Docker image for the frontend, which includes the establishment of the working directory, installation of requisite Node.js packages, and the definition of the command to initiate the application.

     The backend, situated in the `nubes-back` directory, is another Node.js application. It is responsible for data manipulation and persistence. The backend operates on port 8080 and is constructed using the Dockerfile within the same directory. The backend is modular, with several modules like `bookings` that manage the creation and administration of bookings.

     The `docker-compose.yml` file orchestrates the services for both the frontend and backend. It details the build context, Dockerfile, ports, and the start command for each service.

     The objective of this project is to offer a comprehensive solution for booking management. It allows users to create and manage bookings, with the ability to specify details such as the number of attendees, table type, and booking date and time. The application also tracks the status of the booking and payment. Data validation is ensured through decorators like `IsNotEmpty`, `IsString`, and `IsEnum` in the `CreateBookingDto` class.

     The project leverages client-server fetching to ensure efficient data retrieval and manipulation. It is designed to be a white-label product, allowing for easy customization and branding. The use of open-source code and Docker ensures that the setup is platform-agnostic, promoting wider usability and adaptability.
