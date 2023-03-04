import { Column } from '../components/Layout';
import { List } from '../components/List';
import { Section } from '../components/Section';
import { Text, Title } from '../components/Text';

const Privacy = () => (
	<Section id="privacy">
		<Column>
			<Title>ЗАЩИТА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ</Title>
			<div style={{ margin: '0 48px' }}>
				<List align="start" type="numeric">
					<Text>Предоставляя свои персональные данные на сайте, Пользователь даёт Оператору своё согласие на обработку и использование своих персональных данных согласно ФЗ № 152-ФЗ «О персональных данных» от 27.07.2006 г. различными способами в целях, указанных в настоящих Правилах.</Text>
					<Text>Под обработкой персональных данных понимается любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение) извлечение, использование, передачу (в том числе передачу третьим лицам, не исключая трансграничную передачу, если необходимость в ней возникла в ходе исполнения обязательств), обезличивание, блокирование, удаление, уничтожение персональных данных.</Text>
					<div>
						<Text>Оператор использует персональные данные Пользователя в целях:</Text>
						<div style={{ margin: '0 48px' }}>
							<List align="start" type='bullet'>
								<Text>регистрации Пользователя на Сайте;</Text>
								<Text>для определения победителя в акциях, проводимых Администрацией Сайта;</Text>
								<Text>получения Пользователем персонализированной рекламы;</Text>
								<Text>для выполнения своих обязательств перед Пользователем.</Text>
							</List>
						</div>
					</div>
					<Text>Оператор обязуется не разглашать полученную от Покупателя информацию. При этом не считается нарушением обязательств разглашение информации в случае, когда обязанность такого раскрытия установлена требованиями действующего законодательства РФ.</Text>
					<Text>Пользователь/Покупатель вправе отказаться от получения рекламной и другой информации без объяснения причин отказа путем информирования Оператора о своем отказе посредством направления соответствующего заявления на электронный адрес Продавца: <a href="mailto:hello@arhpotolki.info">hello@arhpotolki.info</a>. Сервисные сообщения, информирующие Пользователя/Покупателя о заказе и этапах его обработки, отправляются автоматически и не могут быть отклонены Пользователем/Покупателем.</Text>
					<Text>Оператор вправе использовать технологию «cookies». «Cookies» не содержат конфиденциальную информацию. Посетитель / Пользователь / Покупатель настоящим дает согласие на сбор, анализ и использование cookies, в том числе третьими лицами для целей формирования статистики и оптимизации рекламных сообщений.</Text>
					<Text>Оператор не несет ответственности за сведения, предоставленные Пользователем/Покупателем на Сайте в общедоступной форме.</Text>
					<Text>Оператор вправе осуществлять записи телефонных разговоров с Пользователем/Покупателем. При этом Оператор обязуется: предотвращать попытки несанкционированного доступа к информации, полученной в ходе телефонных переговоров, и/или передачу ее третьим лицам, не имеющим непосредственного отношения к исполнению Заказов, в соответствии с п. 4 ст. 16 Федерального закона «Об информации, информационных технологиях и о защите информации».</Text>
				</List>
			</div>
		</Column>
	</Section>
);


export default Privacy;