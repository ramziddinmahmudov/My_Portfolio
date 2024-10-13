import React from 'react';
import './Section.css'; 

const testimonials = [
  {
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "John",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgECBAUHAwj/xABCEAABAwMCAgcEBgcHBQAAAAABAAIDBAURBiESMQcTQVFhcYEUIpGhMkJiscHwFSMkUnKC0UOSorLC4fEzU1RVlP/EABkBAQADAQEAAAAAAAAAAAAAAAABAgQDBf/EACERAQEBAQADAQACAwEAAAAAAAABAhEDITESIkETMkIE/9oADAMBAAIRAxEAPwDuKIiAiIgIiICIiAqIeRWm1FqW0abpDUXetjgaQeCMnL5P4W8z8EG6VFyC7dNcBZIy021zXHIbNVOwB4kN4vvUNOptQXRz5I9Q1GXZJa2odGG57NsYHoot4vMWvoaW40MLyyWsga8c2mQZHovSGspZn8ENRE92M8LHglfP8ep9T26CNk1yq+o+pwBvLwIG/qt3Q6tvz6YPdXRVUDTg+1RB2+2A7YFp8d/FU/Sf8ddsVVz7T2u+ukZT3KmdDLsCGvyz+Unf0PeMKewysmY2SNwc1wyCFeXqlnHoiIpQIiICIiAiIgIiICIiAiIgIiICodgqrxqqiKlp5J6iRscUbS973HAaAMklBE+kLXNJo2iaOH2i4ztPUQkHhHZxPI5D5k7DtI+ebrc6m83aS73moMskp93i3w3sDc4AaOXL0WXrO9zah1PU3GoY10bnujhGScQgnhHvHbbfYcye/Cvo9LmtijlEjupkIHEBsfzjl5KtrrjLBp79TUrw6npo+IfWLeI/3ncvTCktHrtskZbNZW1PDjLm1GSM9uCMLHOlaWkjkdUNbKxrTktPI88bfn5LzprLSxsZcbRWbj3XxPbtjkWuHw25OA8QVz/jXT296bUlqfxCCi4IZAeKJo4eEdpDR7p88Z+SybJcKakuRI4XUz2EsfnAe0DJYfEc/LPmopUU0kMMzBCW8E4e1wOS04IcAe4jhOfBWU3W8LgOLJHEOEYAON8fP0KnkOWplcqllNcaZsDmPo6oAR8WCC1+BwuHhz37NlLtFXqOjrLVK8ODKp5pCM54e1g542Lg3yOVy2lbLJDHSvJMcJ93IxgF2+Pmtx+kpnOgghOXsIc1wzhh2JPgeflsEnFbn0+lgcgEKq5No3pSbNXx2i/Y6x0gjjrGA4cSQAHNxtz58l1cFdY4VciIgIiICIiAiIgIiICIiAiIgLS6xc1ulrq50TJQKSQiN7eIPOOWO3K3S0OuJzTaQvM7c5jopSMDP1ShHzTY7RW3ivkjpmD3dy3AwT2DwC6baNA10dKwPro4SebYmEgnxzv+QtX0Qxl8tU4Y4Q/APb35+5daiHDgLNvfbxtzJIhDOjupLjILtknY5Zz8+/t+Ktp+jupimc4ujwe2M44vPZdGiGy92tUSdRd2IFNomKWidGWs60gcRP1iP+fmtfT9HMTWDjlaHZyMN+S6Y8bLwe3YqLlM31AW6JhjLg+o79wwBaS4aUqaNkj4HCVuN+AhpIXSKpm61dwyKZxGcjlhU7yr864BeozTXItADG9gI4h+fkvp/SNybeNO2+ua4OMkLeJzSDkjY8ifHnv34Ow+atZsjZdJ+EAAHOWch37LvHQ9I+bQdvkkcC9z5OIgYJw4jf4D5eu3N7GPyTibFVVCqqXMREQEREBERAREQEREBERAWg16M6KvgP8A4Ev+UrfrSa0jE2krzGfrUM3+QomfXK+iCLFvMh5OlwGjny5rqUTeS570VwtjslO7tkeSB4fnK6KwLHf9mz+mTFyXsF4RFe4XXLjVHFecn0T5L1K8Z+QU6+JjXzjdae9HhpDnvC3cm5WpvrP2F3os9jRmuDa6YWXWR7e1d16GmhvR9btvpOkP+Mri/SDBwVsMwbtK3h8iP9l3bowj6vQVlGNjBxj+ZxP4rXj4zeb6lQREV3AREQEREBERAREQEREBERAUX1hXNbY73Tye60UMuX8W4yw42UnPJQnWFI9k9ZVRt6xk1KY5Y/324I/H71TyXkdfDma1yo1pCohtVjtjql3V/szHkeJGfxUkbqy3EZc7hZyGe30C08drbNbaYSD3YoWgDGcENC1T6W61LK2npPZKFkTD7O32VrnSO7/e2A37vXvz97pr5JPab0+qLTVEdTWR8ZOOE5/otvDcI3MHC9rvVcct2iK6tiqaqvmdDOC0xNzGQ47ZJLWjmeIjbYYG++JTpq03W0VMMdXLx0kmQ0OO4P58T5qbblExnUTt9cwAk8gFoLpq2029+KyrawnkNz+f901VSyOtcppnOErhwtaDjJJwPz4KGM0Jx1EP6UqnOiLWulLJPePg3t9Rt59kfq36nOMyJCNb0FTMGUnG/O2eQP4/Ja256mLm9XNG3hOxfG7IHxwtazSlVbLoHw3WeltgkdIeqnkD3AuHukEkAADA2ByTknAXtaLbV1E8r6t8tbCXkRTPwC5viB+cKdZ4eO9nziJa6b7TbOsAzwODm/dldf01fKW3aKsz+HijZRwtcWuADfdA+P8AQrn2tLQ6Gimi90F4y3BxjdZNkgq9S1Vqgc50VvgmjAp+XFwDPE7bPZy8fVWmrIi+Ka7a7SD396uVgxgBXrQwCIiAiIgIiICIiAiIgIiIKHktZemM6nieMt3aR5raLFr4G1FLLE5gdlvz7FXU7F8Xmoj1pbG+JzWnIaS3Hkvc22KR/E/Id9lay3VHU1j4iWuLwMdngfmFIIXcW6zTjXrvXiKGBjBzPiXZWHWMax8Ia76LvuW2ccrTVBeaiTPJuAE0Y7V96dxU2O7desEcUjWkNGcb7ZCx7qH+xMcOeMLy09K7M8DnZ4SMDu7x8Qn/AEvZ/FsJrdSSgF8LfuVIaaGEOdhuANmjuWWXcIIWtuNR1Ebj4FTXPPUV1TLBJcIGSHDAeJ7sch+SFK9IUtPwOqYI2NaHEANwcZx+H3rnE1Ubjc3sDXkTZY3h5kbAAeJJ+S67YqNtvtVLStjazq4xxNaMAO5n5kq3jz3XTzb/ADjjYqqoqrQxCIiAiIgIiICIiAiIgIiICoTscqpVEES1jTR0slPXxR4kdLwSEdu2x+S97fUdbE0+CzNW0xmskrg3idCRJ8NifgSo/bZcRsc12zgs3k9Vr8N7lIRLtutBf6K6TSie01cUTsfrGSNzxfDksmrqY6aJ81RI5sbOZa0uAHjjktYzWtjc4thldMORcAS344XN1znX9Rp71BqqupxDJ1EDYhkyRHJceQxnGFvdI26ptVM41dR180rskhoAA/4/HyXnNrWzdSA0Svc4/wDSDDlvrhYp1paJpOr4KuNzxgfqXHJ25Y58x8U46XPk57iVyzKLarrDHSS8Ltw3ZbTrHGMStEjGviLyJG4Ixg7jCiGqKxho6kudgE8IHikrnJJOpb0XUEAsEddJTxmpdK/hmLMvDeWATvjn81OFodEUpotKWyJ303QiV3m/3vxwt8tmZ6YdXtoiIpVEREBERAREQEREBERAREQEREFkrGyxPjkaHMc0tcDyIK5hTVJpa+soMHMUzhGHfug4H4eq6keS5re7Y6qnlrqT3KiOZ72OHPPEdj4Lj5vjR/577bylrQ6PiazPE3BXjUNG7oWAn/tubzK1Wm7zBVyOpZ2dVUsOerdt8FLIRF+61Z51o/Vz7Rk1s8bi39CkyD67XNLez17B2KlNxsf1kkPVjf8AVgDGVLCYDtwt+Cwqp8UZ5NGO1TZYt/lt9I9eLnJ7LKGjhkewxt8jy+S55qKodJU0lDxZlyOIfaceXpsttrfVdPS1HslE1stS3kByDuxR+0UFQZBcK08UznBxPaPD71bGeXquvlfR8bGxxsY36LQAF6K0BXLW88REQEREBERAREQEREBERARUe4NYXOcGtAySeQUB1L0r6bswfDTTOudW3+zpCCwHxk+j8MoJ8eRWiv2rrHYf1dwr4/aTgNpYj1kzydgAwb7+S4PqbpQ1LfeNkVQLdSHI6mjJDsfaf9I+mPJX9D1FDWaykfMON8FHLM3iwff4mNz54e74qLeRMnbx2k6mnqaQyR26Wm4mZaKhzeIeYaSPnnwXnbmZp8P+sN1dPFxZavakb1bcLNdXX1qmZmekS1XYCXtq6R5jmach7NiFpW37UlCwBtMyrYPrDLT6jsXTKiHrYyOHmMLQezx0VXwPaDE87g9irZx0zqWIXL0hXeEFhtMnH4hxH3LRXPV9/r2GKOMwBx95wJ5eq6re6Kiaw+4DxDYdqjf6CjklyxnDk9nNJVvSH6W0u+Wo9pqcvcdyTvuphcaMU1HIxjeTfwUiorcykpwOHb8VhXKIzcTG92FPVez42Deku0U9RTR3aGopIqjaOr4eKHPc4jcHvyMeOFNKSphq6eOopZY5oJQHMkjeHNcDyII5hcO13Tik0K9j/pdfE1vof6AqC6b1be9NTNNnr3xxEkupZPfhd5s5DzGCtOL2MXkkzX1ki5bpXpktVc1kOoYjbanYGVuXwO9ebfXbxXSaKsp66BlRRTxVEDxlskTw5p8iFZVkoiICIiAiIgIeSj2q9YWXStP1t0qgJS3MdNGA6WT+FuR8TgLjep+mW9XIvp7JFHa6c/2gIkmI8/ot9BnxRDuF71BaLBCJrxcKekYeQkf7zv4W8z6LmmpOm+khD4dOW99S8ZAqKsFjPMMHvEefCuI1NVPV1Ek9XNLPUPOZJZXlzneZO5XkgkGo9X37UpzdrjLJDnPszMMiB7PdHPzOStGFYFeFKF3MYU56HaptPrdkcjuE1VLLC3xOz/8AQVBc+Xqsq2V81suVLX0pHW00rZWZ5Ejv8DuFFnYmXl6+pXRqwt4CFbZ7nTXu101yozxQTsDm97T2tPiDkeiyXN2Wetc12LAdlh11LHUtLJGcQIwVmhqslHNRxMrQw2eOKQyccjgOQe/OB6rOpoGh3E3sXuY3E4LtivWONrGlRItb1j1T+FuFiNpskY7d1ltjdLMXu5DYLyvVbS2WgluFe8R01Owl+27j2NHeTyUyd9K28cu6Za9jHW6zxOzw8VTKO47tZ/r+S5kVnXy6T3m61NyqxiWoeXFuchg5Bo8AAAPLK15K0ZnIyavauys+0Xu52Sp9os9dPRydronYD/Np2d6ha4FFZV17TnTZWQFsWoLe2pYTjr6PDHgd5YTwn0LfJdT05rCwakA/RVyiklxk07yWSt82Hf13C+TVc0ljg5ri1zTkEHBChL7QRfNGmOlPUtkDYqioFypW7dTVHLseEm7h65XYdI9Jdh1LJHTCQ0Ne8gCmqcAvP2HcnfI+CJTZFblEHx7fbvVX271d0rXfr6mQucOYaOxo8AMD08VgYV7huqKVeqIVXCIKBXY2VFUIigVUKIdTPo71vJpardT1TZJrVO7Mkbd3RO/faO3xHaPLfvNuuFJc6OKst88dRTzDLZY3ZHl5+f37L5U5LaWHUN209P19prHQEnMkR96OT+Jh2Pnse4rnrPXTO+PqIKxzc7Lllm6ZYXMbHfrXIx+N5qNwcD5tcQR6EqSUfSbpGcAyXQwn92amlGPUNI+ap+a7TcS4Q/ZVHtDgWnl2qLVHSfo2EHhupmcPqxU0rvnwgfNRG/dMZc0xaftfCeQqK7s/kafvd6J+KXyR0m7XS32G3vrLlOyngZyJOXOPYGgcz5LgmvNZ1WrK5uA+nt8B/Z6fPP7b+92Nu4ch2laS73e4XqqdVXWslqpiMAvOzR3NaNmjwGB4LAJXTOXLXk/S4lWISmVdzCqIiCiKoRBRXHBGDyKoq9hQbL9P3v8A93d//slRa7i+wP76IKE+6FTKIhFFUoiAq5RESZVexEUKnYqAoiJivEnvIikMpxIiKqZRERK1VREWURERCqIiAhVEQW5REQf/2Q==" // Bu yerda tasvir URLini qo'yasiz
  },
  {
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "John",
    image: "data:image/jpeg;base64,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"
  },
  {
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "John",
    image: "data:image/jpeg;base64,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"
  },
  {
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "John",
    image: "data:image/jpeg;base64,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"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">“{testimonial.text}”</p>
            <div className="client-info">
              <img src={testimonial.image} alt={testimonial.name} className="client-image" />
              <p className="client-name">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
