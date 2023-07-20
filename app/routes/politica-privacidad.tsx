import { useLoaderData } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import { CollectionCard } from '~/components/collections/CollectionCard';
import { BookOpenIcon } from '@heroicons/react/24/solid';
import { LoaderArgs } from '@remix-run/server-runtime';

export async function loader({ request }: LoaderArgs) {
  const collections = await getCollections(request);
  return {
    collections,
  };
}

export default function PoliticaPrivacidad() {
  const { collections } = useLoaderData<typeof loader>();
  const headerImage = collections[0]?.featuredAsset?.preview;
  return (
    <>
      <section
        aria-labelledby="category-heading"
        className="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8"
      >
        <div className="px-4 sm:px-6 lg:px-8 xl:px-0">
          <div className="text-center">
            <h1 className="text-2xl">Política de privacidad</h1>
          </div>
          <p className="mt-4 text-black text-justify">
            En cumplimiento de lo establecido en el Reglamento (UE) 2016/679 del
            Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a
            la protección de las personas físicas en lo que respecta al
            tratamiento de datos personales y a la libre circulación de estos y
            en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
            Personales y garantía de los derechos digitales, así como en su
            normativa de desarrollo, les facilitamos información ampliada en la
            presente Política de Privacidad.
          </p>
          <div className="mt-4 text-black text-center">
            <h3 className="font-semibold">Antes de empezar…</h3>
          </div>
          <div className="mt-4 text-black text-justify">
            Algunos nombres que usaremos en esta Política de Privacidad y
            Cookies: o Cuando hablamos de nuestra Plataforma, nos referiremos en
            general a cualquiera de los canales o medios digitales o en persona
            que hayas utilizado para interactuar con nosotros. Los principales
            son:
            <ul className="list-disc list-inside">
              <li>Nuestra Web.</li>
              <li>
                Nuestra App, es decir, tanto la aplicación móvil que te hayas
                instalado en tu dispositivo como las que podamos utilizar en
                nuestra Plataforma.
              </li>
              <li>En persona, en alguna de nuestras Tiendas Físicas.</li>
            </ul>
            <div className="mt-4 text-black text-justify">
              <p>Quién es el responsable del tratamiento de sus datos</p>
            </div>
            <div className="mt-4 text-black text-justify">
              <ul>
                <li>
                  Identidad: A CAPRICHO CATERING Y SERVICIOS SL (en adelante A
                  CAPRICHO)
                </li>
                <li>
                  Dirección Postal: Calle Antonio López Torres, 3 C, 28055
                  MADRID (ESPAÑA)
                </li>
                <li>Correo electrónico: protecciondatos@acapricho.com</li>
              </ul>
            </div>
            <div className="mt-4 text-black text-justify font-semibold">
              <p>Con qué finalidad tratamos sus datos personales</p>
            </div>
            <div className="mt-4 text-black text-justify">
              <p>
                En A CAPRICHO tratamos la información que nos facilitan las
                personas interesadas con el fin de prestar el servicio de venta
                on-line de comida y su entrega a domicilio, así como para el
                envío de comunicaciones comerciales.
              </p>
            </div>
            <div className="mt-4 text-black text-justify">
              Dependiendo de los productos, servicios o funcionalidades de los
              que quieras disfrutar en cada momento necesitaremos tratar unos
              datos u otros, que en general serán, según el caso, los
              siguientes:
            </div>
            <div className="mt-4 text-black">
              <ul className="list-disc list-inside">
                <li>
                  tus datos identificativos (por ejemplo, tu nombre, apellido,
                  imagen, idioma y país desde el que interactúas con nosotros,
                  datos de contacto, etc.);
                </li>
                <li>
                  información económica y transaccional (por ejemplo, tus datos
                  de pago o de tarjeta, información acerca de tus compras,
                  pedidos, devoluciones, etc.);
                </li>
                <li>
                  datos de conexión, geolocalización y navegación (por ejemplo,
                  los datos de localización, el número de identificación del
                  dispositivo o el ID de publicidad);
                </li>
                <li>
                  información comercial (por ejemplo, si estás suscrito a
                  nuestra newsletter),
                </li>
                <li>datos sobre tus gustos y preferencias.</li>
              </ul>
            </div>
            <div className="mt-4 text-black text-justify">
              Recuerda que, cuando te pidamos que rellenes tus datos personales
              para darte acceso a alguna funcionalidad o servicio de la
              Plataforma, marcaremos algunos campos como obligatorios, puesto
              que son datos que necesitamos para poder prestarte el servicio o
              darte acceso a la funcionalidad en cuestión. Por favor, ten en
              cuenta que si decides no facilitarnos esos datos, es posible que
              no puedas completar tu registro como usuario o que no puedas
              disfrutar de esos servicios o funcionalidades. En otros casos,
              podemos obtener información de forma pasiva al utilizar
              herramientas de rastreo, como las cookies de los navegadores u
              otras tecnologías similares de nuestra Plataforma o de las
              comunicaciones que te enviamos. En determinados casos, un tercero
              puede habernos facilitado información sobre ti al usar una
              funcionalidad o servicio de la Plataforma, por ejemplo, si te han
              enviado una tarjeta regalo o si envían un pedido a tu dirección.
              En tales casos, únicamente trataremos tus datos en relación con
              esa funcionalidad o servicio, de conformidad con lo establecido en
              la presente Política de Privacidad y Cookies. Dependiendo de cómo
              interactúes con nuestra Plataforma, trataremos tus datos
              personales para las siguientes finalidades:
            </div>
            <div className="mt-4 text-black text-justify">
              <table className="border-separate border-spacing-1 border border-slate-400">
                <thead>
                  <th className="border border-slate-300">FINALIDAD</th>
                  <th className="border border-slate-300">INFORMACIÓN</th>
                </thead>
                <tr>
                  <td className="border border-slate-300">
                    1. Para gestionar tu registro como usuario de la Plataforma
                  </td>
                  <td className="border border-slate-300">
                    En caso de que decidas registrarte como usuario en nuestra
                    Plataforma, necesitamos tratar tus datos para identificarte
                    como usuario de la misma y darte acceso a sus diferentes
                    funcionalidades, productos y servicios que están a tu
                    disposición como usuario registrado. Puedes cancelar tu
                    cuenta de usuario registrado contactando con nosotros a
                    través de Atención al Cliente. Te informamos de que los
                    datos que recopilamos sobre tu actividad, obtenidos a través
                    de los diferentes canales de la Plataforma, y que incluyen
                    tus compras, permanecerán vinculados a tu cuenta para que se
                    pueda acceder a toda la información de una vez.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300">
                    2. Para el desarrollo, cumplimiento y ejecución del contrato
                    de compraventa o de servicios que hayas contratado con
                    Nosotros en la Plataforma
                  </td>
                  <td className="border border-slate-300">
                    Esta finalidad incluye el tratamiento de tus datos para,
                    principalmente: Contactar contigo en relación a
                    actualizaciones o comunicaciones informativas relacionadas
                    con las funcionalidades, productos o servicios contratados,
                    incluyendo el envío de encuestas de calidad sobre los
                    productos o servicios prestados. Gestionar el pago de los
                    productos que compres, independientemente del medio de pago
                    utilizado. Por ejemplo: Si al comprar alguno de nuestros
                    productos a través de la Web o la App, eliges activar la
                    funcionalidad de guardar tus datos de pago y tu dirección de
                    envío para futuras compras (en caso de que esté disponible
                    esta funcionalidad), necesitamos tratar los datos indicados
                    para la activación y desarrollo de dicha funcionalidad. El
                    consentimiento para la activación de esta funcionalidad
                    permite que aparezcan tus datos de pago autocompletados en
                    compras posteriores para que no tengas que volver a
                    introducirlos en cada nuevo proceso, y se entenderán válidos
                    y vigentes para compras posteriores. Podrás modificar o
                    eliminar tus datos de pago en cualquier momento a través del
                    apartado correspondiente a la información de pago, bien de
                    tu cuenta de usuario registrado en la Web. Activar los
                    mecanismos necesarios con objeto de prevenir y detectar el
                    uso indebido de la Plataforma, por ejemplo, durante el
                    proceso de compra y devolución, así como potenciales fraudes
                    contra ti y/o contra Nosotros. Si consideramos que la
                    operación puede ser fraudulenta o detectamos comportamientos
                    anormales con indicios de tratarse de usos fraudulentos de
                    nuestras funcionalidades, productos y servicios, este
                    tratamiento puede tener consecuencias como el bloqueo de la
                    transacción o la cancelación de tu cuenta de usuario.
                    Gestionar posibles cambios o devoluciones una vez hayas
                    realizado una compra y gestionar solicitudes de información
                    según dichas opciones se encuentren disponibles en cada
                    momento. Con fines de facturación y para poner a tu
                    disposición los tickets y facturas de las compras que hayas
                    realizado en la Plataforma. Garantizarte el uso de otras
                    funcionalidades o servicios en la medida que estén
                    disponibles, como la compra, recepción, gestión y uso de la
                    Tarjeta Regalo o del Ticket Regalo. Con el fin de ofrecerte
                    determinados servicios necesitamos tratar tus datos de
                    localización y contacto.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300">
                    3. Para atender las solicitudes o peticiones que realices a
                    través de los distintos canales de contacto y atención al
                    cliente
                  </td>
                  <td className="border border-slate-300">
                    Sólo tratamos los datos personales que sean estrictamente
                    necesarios para gestionar o resolver tu solicitud o
                    petición. Si utilizas el canal telefónico, la llamada puede
                    ser grabada para atender tu petición y garantizar la calidad
                    de la misma. Si está disponible, y decides utilizar WhatsApp
                    como canal para comunicarte con Atención al Cliente,
                    facilitaremos tu número de teléfono a WhatsApp Inc. (una
                    sociedad ubicada en EE. UU.) para comprobar que eres usuario
                    de este servicio. Te recomendamos que revises tu
                    configuración de privacidad y leas la política de privacidad
                    de WhatsApp para obtener información más detallada sobre el
                    uso que hace WhatsApp de los datos personales de los
                    usuarios que utilizan sus servicios. Si está disponible, y
                    decides comunicarte con Atención al Cliente a través del
                    servicio de chat de una red social u otro colaborador,
                    algunos de tus datos, como tu nombre o nombre de usuario, se
                    importarán desde tu cuenta de la red social o del
                    colaborador. Asimismo, debes tener en cuenta que los datos
                    que introduzcas en este servicio estarán disponibles para tu
                    red social o colaborador y quedarán sujetos a sus
                    correspondientes políticas de privacidad. Así pues, te
                    recomendamos que revises tu configuración de privacidad y
                    leas la política de privacidad de la red social o
                    colaborador para obtener información detallada sobre el uso
                    que hacen de tus datos personales al utilizar sus servicios.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300">
                    4. Para fines de marketing
                  </td>
                  <td className="border border-slate-300">
                    Esta finalidad incluye el tratamiento de tus datos para,
                    principalmente: Personalizar los servicios que te ofrecemos
                    y poder hacerte recomendaciones en función de tu interacción
                    con nosotros en la Plataforma y del análisis de tu perfil de
                    usuario (por ejemplo, en base a tu historial de compra y
                    navegación). En la medida en que te suscribas a nuestra
                    Newsletter, trataremos tus datos personales para gestionar
                    tu suscripción, incluyendo el envío de información
                    personalizada acerca de nuestros productos o servicios a
                    través de diversos medios (como el correo electrónico o
                    SMS). Así mismo, podremos hacerte llegar esta información a
                    través de notificaciones push en el caso de que las haya
                    activado en tu dispositivo. Por tanto, ten en cuenta que
                    este tratamiento de datos conlleva el análisis de tu perfil
                    de usuario o cliente para determinar cuáles son tus
                    preferencias y por tanto cuáles pueden ser los productos y
                    servicios que más encajan con tu estilo a la hora de
                    enviarte información. Por ejemplo, en base a tu historial de
                    compra y navegación, te haremos sugerencias acerca de
                    productos que creemos que pueden interesarte y te
                    facilitaremos la funcionalidad de 'recuperación de carrito'.
                    Recuerda que puedes darte de baja de la Newsletter en
                    cualquier momento y sin coste alguno a través de la sección
                    de 'Newsletter' de la Plataforma, además de a través de las
                    indicaciones que te facilitamos en cada comunicación. Si no
                    deseas recibir notificaciones push, podrás desactivar esta
                    opción en tu dispositivo. Mostrarte publicidad en Internet
                    que podrás ver cuando navegues en sitios web y apps, por
                    ejemplo, en redes sociales. La publicidad que veas puede
                    mostrarse de modo aleatorio, pero en otras ocasiones se
                    trata de publicidad que puede estar relacionada con tu
                    historial de compra, preferencias y navegación. En caso de
                    que seas usuario de redes sociales, podremos facilitarles a
                    aquellas con las que colaboremos determinada información
                    para que puedan mostrarte anuncios de nuestra marca y, en
                    general, ofrecerte a ti o a otros usuarios similares,
                    publicidad teniendo en cuenta tu perfil en dichas redes
                    sociales. Si quieres información sobre el uso de tus datos y
                    el funcionamiento de anuncios en estas redes sociales, te
                    recomendamos que revises la información acerca de tu
                    privacidad en las redes sociales en las que participas.
                    Adicionalmente utilizamos tus datos para llevar a cabo
                    análisis de medición y segmentación de los anuncios que
                    mostramos a los usuarios en algunas plataformas de
                    colaboradores. Para ello colaboramos con estos terceros que
                    nos ofrecen la tecnología necesaria (por ejemplo, a través
                    de cookies, píxeles, SDK) para utilizar estos servicios. Ten
                    en cuenta que, si bien no facilitamos datos personales
                    identificativos a estos colaboradores, les comunicamos algún
                    identificador único (por ejemplo, el identificador de
                    publicidad asociado al dispositivo, identificador de alguna
                    cookie, etc). Si quieres más información al respecto, por
                    favor, revisa nuestra Política de Cookies. Así mismo, puedes
                    restablecer tu identificador de publicidad o deshabilitar la
                    personalización de los anuncios en tu dispositivo
                    modificando tus preferencias en la sección de ajustes de tu
                    dispositivo. Enriquecimiento de datos: Cuando obtengamos tus
                    datos personales de diversas fuentes, podremos combinarlos
                    en determinadas circunstancias con el fin de mejorar nuestra
                    comprensión de tus necesidades y preferencias en relación
                    con nuestros productos y servicios (incluidas las
                    finalidades de análisis, generación de perfiles de uso,
                    estudios de marketing, encuestas de calidad y mejora de la
                    interacción con nuestros clientes). Nos referimos, por
                    ejemplo, a la combinación de información que podemos hacer
                    si tienes una cuenta registrada y, con la misma dirección de
                    correo electrónico que la vinculada a tu cuenta, realizas
                    compras como invitado; o a información recopilada
                    automáticamente (como direcciones IP, MAC o metadatos) que
                    podemos vincular con aquella información que nos hayas
                    proporcionado directamente a través de tu actividad en la
                    Plataforma o en cualquiera de nuestras tiendas (por ejemplo,
                    la información relacionada con tus compras, ya sea en
                    tiendas físicas o en la tienda online, tus preferencias).
                    Llevar a cabo acciones promocionales (por ejemplo, para el
                    desarrollo de concursos o el envío de tu lista de artículos
                    guardados al correo electrónico que nos indiques). Al
                    participar en alguna acción promocional, nos autorizas a que
                    tratemos los datos que nos facilites en función de cada
                    acción promocional y los podamos comunicar a través de
                    diversos medios como redes sociales o en la propia
                    Plataforma. En cada acción promocional en la que participes
                    tendrás disponibles las bases legales donde te facilitaremos
                    información más detallada sobre el tratamiento de tus datos.
                    Difundir en la Plataforma o a través de nuestros canales en
                    las redes sociales fotografías o imágenes que hayas
                    compartido de forma pública.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300">
                    5. Análisis de usabilidad y de calidad para la mejora de
                    nuestros servicios
                  </td>
                  <td className="border border-slate-300">
                    Si accedes a nuestra Plataforma, te informamos de que
                    trataremos tus datos de navegación para fines analíticos y
                    estadísticos, es decir, para entender la forma en la que los
                    usuarios interactúan con nuestra Plataforma y con las
                    acciones que podemos llevar a cabo en otros sitios web y
                    apps y así ser capaces de introducir mejoras. Así mismo, en
                    ocasiones realizamos acciones y encuestas de calidad
                    destinadas a conocer el grado de satisfacción de nuestros
                    clientes y usuarios y detectar aquellas áreas en las que
                    podemos mejorar.
                  </td>
                </tr>
              </table>
            </div>
            <div className="mt-4 text-black text-justify">
              Cuál es la legitimación para el tratamiento de sus datos La base
              legal que nos permite tratar tus datos personales también depende
              de la finalidad para la que los tratemos, según lo explicado en la
              siguiente tabla:
            </div>
            <div className="mt-4 text-black text-justify">
              <table className="table-auto border-separate border-spacing-1 border border-slate-400">
                <thead>
                  <th className="border border-slate-300">FINALIDAD</th>
                  <th className="border border-slate-300">INFORMACIÓN</th>
                </thead>
                <tr>
                  <td className="border border-slate-300">
                    1. Para gestionar tu registro como usuario de la Plataforma
                  </td>
                  <td className="border border-slate-300">
                    El tratamiento de tus datos es necesario para la ejecución
                    de los términos que regulan el uso de la Plataforma. En
                    otras palabras, para que puedas registrarte como usuario en
                    la Plataforma, necesitamos tratar tus datos personales, ya
                    que de lo contrario no podríamos gestionar tu registro.
                    Consideramos que tenemos un interés legítimo para vincular a
                    tu cuenta tus compras y los datos que recopilamos sobre tu
                    actividad a través de los diferentes canales de la
                    Plataforma.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300">
                    2. Para el desarrollo, cumplimiento y ejecución del contrato
                    de compraventa o de servicios que hayas contratado con
                    Nosotros en la Plataforma
                  </td>
                  <td className="border border-slate-300">
                    El tratamiento de tus datos es necesario para la ejecución
                    del contrato de compraventa o de prestación de servicios que
                    nos vincule contigo. Es posible que algunos tratamientos de
                    datos asociados al proceso de compra se activen únicamente
                    porque tú lo solicites o nos autorices, como es el caso del
                    almacenamiento de los datos de pago para futuras compras. En
                    estos casos, la base sobre la que tratamos tus datos es tu
                    propio consentimiento. Consideramos que tenemos un interés
                    legítimo para realizar las comprobaciones necesarias para
                    detectar y prevenir posibles fraudes o usos fraudulentos
                    cuando usas la Plataforma, por ejemplo, al realizar una
                    compra o devolución. Entendemos que el tratamiento de estos
                    datos resulta positivo para todas las partes: para ti, ya
                    que nos permite poner medidas para protegerte contra
                    intentos de fraude realizados por terceros; para Nosotros,
                    porque nos permite evitar que se haga un uso indebido de la
                    Plataforma; para todos nuestros clientes y la sociedad,
                    porque también protege su interés en asegurar que las
                    actividades fraudulentas sean desalentadas y detectadas
                    cuando ocurran.
                  </td>
                </tr>

                <tr>
                  <td className="border border-slate-300">
                    3. Para atender las solicitudes o peticiones que realices a
                    través de los distintos canales de contacto y atención al
                    cliente
                  </td>
                  <td className="border border-slate-300">
                    Consideramos que tenemos un interés legítimo para atender
                    las solicitudes o consultas que nos plantees a través de los
                    diversos medios de contacto existentes. Entendemos que el
                    tratamiento de estos datos resulta también beneficioso para
                    ti en tanto que nos permite poder atenderte adecuadamente y
                    resolver las consultas planteadas. Cuando nos contactes, en
                    particular, para la gestión de incidencias relacionadas con
                    tu pedido o el producto/ servicio adquirido a través de la
                    Plataforma, el tratamiento es necesario para la ejecución
                    del contrato de compraventa. Cuando tu consulta esté
                    relacionada con el ejercicio de los derechos sobre los que
                    te informamos más abajo, o con reclamaciones relacionadas
                    con nuestros productos o servicios, lo que nos legitima para
                    tratar tus datos es el cumplimiento de obligaciones legales
                    por nuestra parte.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300">
                    4. Para fines de marketing
                  </td>
                  <td className="border border-slate-300">
                    La base legítima para tratar tus datos con finalidades de
                    marketing es el consentimiento que nos prestas, por ejemplo:
                    cuando aceptas recibir información personalizada a través de
                    diversos medios, cuando autorizas el envío de notificaciones
                    push en tu dispositivo, cuando prestas tu consentimiento
                    mediante la configuración de las cookies o de la privacidad
                    de tu dispositivo, o cuando aceptas las bases legales para
                    participar en una acción promocional o para publicar tus
                    fotografías en la Plataforma o en nuestros canales de redes
                    sociales. Para ofrecerte servicios personalizados o
                    mostrarte información personalizada, ya sea en nuestra
                    Plataforma o en la de terceros, así como para llevar a cabo
                    el enriquecimiento de datos, consideramos que tenemos un
                    interés legítimo para realizar un perfilado con la
                    información que tenemos sobre ti (como la navegación que
                    realizas, preferencias o histórico de compras) y los datos
                    personales que nos has facilitado como rango de edad o
                    idioma, ya que entendemos que el tratamiento de estos datos
                    también resulta beneficioso para ti porque te permite
                    mejorar tu experiencia como usuario y acceder a información
                    de acuerdo con tus preferencias.
                  </td>
                </tr>

                <tr>
                  <td className="border border-slate-300">
                    5. Análisis de usabilidad y de calidad para la mejora de
                    nuestros servicios
                  </td>
                  <td className="border border-slate-300">
                    Consideramos que tenemos un interés legítimo para analizar
                    la usabilidad de la Plataforma y el grado de satisfacción
                    del usuario ya que entendemos que el tratamiento de estos
                    datos también resulta beneficioso para ti porque la
                    finalidad es mejorar la experiencia del usuario y ofrecer un
                    servicio de mayor calidad.
                  </td>
                </tr>
              </table>
            </div>
            <div className="mt-4 text-black font-semibold">
              Por cuánto tiempo conservaremos sus datos
            </div>
            <div className="mt-4 text-black">
              Los datos personales proporcionados se conservarán por el tiempo
              imprescindible para la realización de la prestación del servicio y
              durante los plazos legalmente establecidos.
            </div>
            <div className="mt-4 text-black font-semibold">
              A qué destinatarios se comunicarán sus datos
            </div>
            <div className="mt-4 text-black">
              Para cumplir las finalidades indicadas en la presente Política de
              Privacidad y Cookies, es necesario que demos acceso a tus datos
              personales a entidades de A CAPRICHO y a terceras partes que nos
              presten apoyo en los servicios que te ofrecemos, a saber:
            </div>
            <ul className="list-disc list-inside">
              <li>Entidades financieras,</li>
              <li>entidades de detección y prevención de fraude,</li>
              <li>proveedores de servicios tecnológicos y de analítica, </li>
              <li>
                proveedores y colaboradores de servicios de logística,
                transporte y entrega,
              </li>
              <li>
                proveedores y colaboradores de servicios relacionados con
                marketing y publicidad.
              </li>
              <li>
                proveedores de servicios relacionados con atención al cliente.
              </li>
            </ul>
            <div className="mt-4 text-black">
              No se comunicarán a otros terceros salvo para cumplir con las
              obligaciones legales.
            </div>
            <div className="mt-4 text-black font-semibold">
              Transferencias Internacionales de Datos
            </div>
            <div className="mt-4 text-black">
              A CAPRICHO recurrirá a prestadores de servicios que, en algún
              caso, pueden estar situados fuera del Espacio Económico Europeo,
              incluso en algún país con un nivel de protección que no sea
              equiparable al del Espacio Económico Europeo. No obstante, todas
              las transferencias internacionales de datos llevadas a cabo por
              Carrefour son legítimas y están amparadas en alguno de los
              mecanismos de protección previstos en la normativa aplicable.
            </div>
            <div className="mt-4 text-black">
              Si no desea que su información sea transferida, procesada o
              mantenida fuera del país o jurisdicción donde reside, debe dejar
              de acceder o utilizar los Servicios de inmediato. Para obtener más
              detalles sobre estas transferencias y las medidas de seguridad que
              utilizamos para facilitar dichas transferencias, comuníquese con
              nosotros a través de protecciondatos@acapricho.com.
            </div>
            <div className="mt-4 text-black font-semibold">
              Cuáles son sus derechos cuando nos facilita sus datos
            </div>
            <div className="mt-4 text-black">
              Cualquier persona tiene derecho a obtener información sobre si A
              CAPRICHO está tratando datos personales que les conciernan, o no.
              Las personas interesadas tienen derecho a acceder a sus datos
              personales, así como a solicitar la rectificación de los datos
              inexactos o, en su caso, solicitar su supresión cuando, entre
              otros motivos, los datos ya no sean necesarios para los fines que
              fueron recogidos.
            </div>
            <div className="mt-4 text-black">
              En determinadas circunstancias, los interesados podrán solicitar
              la limitación del tratamiento de sus datos, en cuyo caso
              únicamente los conservaremos para el ejercicio o la defensa de
              reclamaciones.
            </div>
            <div className="mt-4 text-black">
              En determinadas circunstancias y por motivos relacionados con su
              situación particular, los interesados podrán oponerse al
              tratamiento de sus datos. En este caso, A CAPRICHO dejará de
              tratar los datos, salvo por motivos legítimos imperiosos, o el
              ejercicio o la defensa de posibles reclamaciones.
            </div>
            <div className="mt-4 text-black">
              Podrá ejercitar materialmente sus derechos enviando un correo
              electrónico a protecciondatos@acapricho.com identificándose
              debidamente e indicando de forma expresa el concreto derecho que
              se quiere ejercer.
            </div>
            <div className="mt-4 text-black">
              Si ha otorgado su consentimiento para alguna finalidad concreta,
              tiene derecho a retirar el consentimiento otorgado en cualquier
              momento, sin que ello afecte a la licitud del tratamiento basado
              en el consentimiento previo a su retirada. En caso de que sienta
              vulnerados sus derechos en lo concerniente a la protección de sus
              datos personales, especialmente cuando no haya obtenido
              satisfacción en el ejercicio de sus derechos, puede dirigirse al
              Delegado de Protección de Datos, si ha sido designado, o presentar
              una reclamación ante la Autoridad de Control en materia de
              Protección de Datos competente a través de su sitio web:
              www.agpd.es
            </div>
            <div className="mt-4 text-black font-semibold">
              Más información sobre el tratamiento de sus datos{' '}
            </div>
            <div className="mt-4 text-black">
              Cuando precisemos obtener información por su parte, siempre le
              solicitaremos que nos la proporcione voluntariamente prestando su
              consentimiento de forma expresa a través de los medios habilitados
              para ello.
            </div>
            <div className="mt-4 text-black">
              El tratamiento de los datos recabados a través de los formularios
              de recogida de datos del sitio web u otras vías, quedará
              incorporado al Registro de Actividades de Tratamiento del cual es
              responsable A CAPRICHO. A CAPRICHO trata los datos de forma
              confidencial y adopta las medidas técnicas y organizativas
              apropiadas para garantizar el nivel de seguridad adecuado al
              tratamiento, en cumplimiento de lo requerido por el Reglamento
              (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril
              de 2016 y demás normativa aplicable en materia de Protección de
              Datos. No obstante, A CAPRICHO no puede garantizar la absoluta
              invulnerabilidad de los sistemas, por tanto, no asume ninguna
              responsabilidad por los daños y perjuicios derivados de
              alteraciones que terceros puedan causar en los sistemas
              informáticos, documentos electrónicos o ficheros del usuario. Si
              opta por abandonar nuestro sitio web a través de enlaces a sitios
              web no pertenecientes a nuestra entidad, A CAPRICHO no se hará
              responsable de las políticas de privacidad de dichos sitios web ni
              de las cookies que éstos puedan almacenar en el ordenador del
              usuario.
            </div>
            <div className="mt-4 text-black font-semibold">
              Cambios en la política de privacidad y cookies
            </div>
            <div className="mt-4 text-black">
              Es posible que modifiquemos la información contenida en esta
              Política de Privacidad y Cookies cuando lo estimemos conveniente.
              En caso de que lo hagamos, te lo notificaremos por distintas vías
              a través de la Plataforma (por ejemplo, a través de un banner, un
              pop-up o una notificación push), o incluso te lo comunicaremos a
              tu dirección de correo electrónico cuando el cambio en cuestión
              sea significativo para con tu privacidad, de manera que puedas
              revisar los cambios, valorarlos y, en su caso, oponerte o darte de
              baja en algún servicio o funcionalidad. En cualquier caso, te
              sugerimos que revises esta Política de Privacidad y Cookies de vez
              en cuando por si hubiera cambios menores o introducimos alguna
              mejora interactiva, aprovechando que siempre la encontrarás como
              punto permanente de información en nuestra Web y nuestra App.
            </div>
            <div className="mt-4 text-black font-semibold">
              Información sobre cookies
            </div>
            <div className="mt-4 text-black">
              Utilizamos cookies y tecnologías similares para facilitar tu
              navegación en la Plataforma, conocer cómo interactúas con Nosotros
              y, en determinados casos, poder mostrarte publicidad en función de
              tus hábitos de navegación. Por favor, lee nuestra Política de
              Cookies para conocer con mayor detalle las cookies y dispositivos
              similares que usamos, su finalidad y cómo gestionar tus
              preferencias, así como otra información de interés.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
