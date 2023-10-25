# flightRadar

Bu proje, uçuş verilerini harita üzerinde görüntüleyen ve kullanıcıların uçuş detaylarını görüntülemesine olanak tanıyan bir web uygulamasıdır. Uygulama React ve Redux kütüphaneleri kullanılarak geliştirilmiştir.

Veri Alma ve Yönetimi:

Uçuş verilerini yönetmek için redux kullanılmıştır. Uçuş verilerini, yükleme ve hata durumunu depolamak için FlightSlice oluşturulmuştur.
GetFlights adlı async bir thunk, bir API isteğinde bulunarak Axios'u kullanarak verileri getirir ve sonuçları Redux mağazasına kaydeder.



Harita ve Liste Görünümleri:

Uygulama, hem harita görünümü hem de liste görünümü sunarak kullanıcıların bunlar arasında geçiş yapmasına olanak tanır.
Harita görünümü, react-leaflet kitaplığı kullanılarak oluşturulur. Uçuş verileri, özelleştirilmiş uçak görüntüleri kullanılarak haritada uçak simgeleri olarak görüntülenir.
Liste görünümü uçuşları tablo formatında sunar. Her uçuşa bir detay butonu eşlik ediyor.

Uçuş detayları:

Uçuş detayları, uçuş simgelerine veya liste görünümündeki detay butonuna tıklanarak görüntülenebilir.
Ayrıntılar SideDetails bileşeni kullanılarak görüntülenir. Veriler bir API isteği kullanılarak getirilir ve ayrıntı sayfası olarak sunulur.

Sayfalandırma:

Sayfa başına sınırlı sayıda uçuş öğesini görüntülemek için liste görünümünde sayfalandırma kullanılır.
React-paginate kütüphanesi sayfa numaraları oluşturur ve sayfalar arasında gezinmeyi kolaylaştırır.

Stil ve Görsel Tasarım:

Görsel iyileştirmeler için uygulamaya CSS stili uygulanır.
Veriler ayrıntılı açılır pencerelerde ve diğer bileşenlerde düzgün bir şekilde görüntülenir.

Ek özellikler:

Uçuş ayrıntılarındaki bağlantılar (havalimanı web siteleri gibi) tıklanabilir şekilde tasarlanmıştır.
Uçuş durumu simgeleri, duruma karşılık gelen arka plan renkleriyle görüntülenir.
Depolama ve Optimizasyon:

Uçuş verileri, farklı bileşenler arasında paylaşım için Redux mağazasında yönetilir.
Verilerin önceden yüklenmesi ve saklanması sayfa geçiş hızını artırır.

# Önizleme
![ezgif com-video-to-gif (5)](https://github.com/zeynepdeli/flightsRadarProject/assets/129688573/97758a0f-f7f8-4955-b609-a36b59fa52a9)








