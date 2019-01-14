import React from 'react';
import Container from '../UI/Container/Container';
const Home = () => {
	return (
		<>
			<section class='hero is-medium is-primary is-bold'>
				<div class='hero-body'>
					<Container>
						<h1 class='title'>Ut sed suscipit</h1>
						<h2 class='subtitle'>Incubate Hawaii Automotive</h2>
						<button className='button'>Zacznij planowanie!</button>
					</Container>
				</div>
			</section>
			<section className='section'>
				<Container>
					<div class='content  is-medium'>
						<h1>Hello World</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
							accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
							nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
							odio, sollicitudin vel erat vel, interdum mattis neque.
						</p>
					</div>
				</Container>
			</section>
			<section className='section is-info'>
				<Container>
					<div className='columns'>
						<div className='column'>
							<div className='content'>
								<h2>Second level</h2>
								<p>
									Curabitur accumsan turpis pharetra{' '}
									<strong>augue tincidunt</strong> blandit. Quisque
									condimentum maximus mi, sit amet commodo arcu rutrum id.
									Proin pretium urna vel cursus venenatis. Suspendisse
									potenti. Etiam mattis sem rhoncus lacus dapibus
									facilisis. Donec at dignissim dui. Ut et neque nisl.
								</p>
							</div>
						</div>
						<div className='column'>
							<figure class='image is-16by9'>
								<img
									src='https://picsum.photos/600/400/?random'
									alt='random'
								/>
							</figure>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
};
export default Home;
