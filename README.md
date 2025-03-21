
# About the project
Wemage is a React-based website that allows users to search and view photos using the [`Pexels API`](https://www.pexels.com/api/documentation/). To use it, simply enter keywords in the search box to find matching images. For each image, you can visit the photographer’s page, view it in full screen, and download it in high quality. The site is fully responsive, features a light/dark mode switch, and includes a pagination system to prevent excessive image loading at once. Additionally, images are displayed in a masonry layout, ensuring a smooth and dynamic browsing experience.

# Tech Stack
The project was developed using React, with HTML and TypeScript for page structure. Styling is achieved through a combination of CSS, TailwindCSS, and Styled Components, ensuring a modern and flexible design. To fetch images, the Pexels API was integrated, allowing users to search and display photos based on their entered keywords.
<table align="center">
    <tr>
        <th></th>
        <th>
            Frontend
        </th>
        <th>
            Backend
        </th>
    </tr>
    <tr>
        <th>
            Languages
        </th>
        <td>
            <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
            <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>
            <img alt="Typescript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
        </td>
        <td></td>
    </tr>
    <tr>
        <th>
            Frameworks
        </th>
        <td>
          <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
          <img alt="Styled Components" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
        </td>
        <td></td>
    </tr>
    <tr>
        <th>
            IDE / Editor
        </th>
        <td>
          <img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" />
        </td>
        <td></td>
    </tr>
</table>

# Requirements
1. Install [`.NET SDK`](https://dotnet.microsoft.com/en-us/download) (includes .NET Runtime).
2. Install [`SQL Server Express`](https://www.microsoft.com/en-us/sql-server/sql-server-downloads).
3. Install an IDE of your choice. I personally recommend [`Visual Studio`](https://visualstudio.microsoft.com/downloads/) [OPTIONAL].

# How to run locally (command line)
1. Run a `git clone` of the repository:
```
git clone https://github.com/LucasOkokama/home-book-app-aspnetmvc.git
```
2. Open the `home-book-app-aspnetmvc` folder and Install the `dependencies`:
```
cd home-book-app-aspnetmvc
dotnet restore
```
3. It may be necessary to update the connection string in the `appsettings.json`. Make sure to replace `NBLUCAS` with YOUR appropriate server name. If you're not using Windows Authentication (`Trusted_Connection=True`), ensure you add your `User Id` and `Password` for SQL Server Authentication.
```
"ConnectionStrings": {
  "DefaultConnection": "Server=NBLUCAS\\SQLEXPRESS;Database=HomeBookApp;Trusted_Connection=True;TrustServerCertificate=true"
}
```
4. Install the `dotnet-ef` tool:
```
dotnet tool install --global dotnet-ef
```
5. Open the `HomeBookApp.Infrastructure` folder and `Run the migrations`:
```
cd HomeBookApp.Infrastructure
dotnet ef database update --startup-project ../homebookapp
```
6. Open the `HomeBookApp` folder and `Run the project`:
```
cd ../homebookapp
dotnet run
```
7. Access `localhost` to open the website:
```
http://localhost:5129
```

# References
This project was inspired by the [`Flashdash`](https://flashdash-nine.vercel.app/) website created by [`Paulo Victor`](https://github.com/paulopbi).


# License
```
MIT License

Copyright (c) 2025 Lucas Kazuhiro Okokama

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
