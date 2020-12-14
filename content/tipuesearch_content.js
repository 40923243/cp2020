var tipuesearch = {"pages": [{'title': '首頁', 'text': '\xa0Succeeding in PC Hardware \n \n PC Hardware is an online course, where the content will be presented in the form of both text and activities. \n While you will have more flexibility than in a traditional course, you will also have more responsibility for your own learning. You will need to: \n \n Plan how to work through each unit. \n Determine how to use the various features of the course to help you learn. \n Decide when you need to seek additional support. \n \n', 'tags': '', 'url': '首頁.html'}, {'title': 'HW1', 'text': '', 'tags': '', 'url': 'HW1.html'}, {'title': 'Overview(總覽)', 'text': 'In this lesson, we will discuss TCP/IP, and the two common types of Internet addressing: Internet protocol version 4 (IPv4) and Internet protocol version 6 (IPv6). We will discuss IPv4 in depth, as it is still the most dominant version in use in our networks. Then, we will cover the specifics of IPv6, differences between IPv4 and IPv6, and the reason we are moving toward IPv6 in the future. \n 在本課程中，我們將討論TCP / IP以及Internet尋址的兩種常見類型：Internet協議版本4（IPv4）和Internet協議版本6（IPv6）。我們將深入討論IPv4，因為它仍然是我們網絡中使用的最主要版本。然後，我們將介紹IPv6的細節，IPv4與IPv6之間的差異以及將來向IPv6過渡的原因。 \n', 'tags': '', 'url': 'Overview(總覽).html'}, {'title': 'TCP IP', 'text': 'Computer networks — including the Internet, which is the largest computer network — use Transmission Control Protocol/Internet Protocol or TCP/IP for network communications both internally on a LAN/WAN and externally to the Internet. \n TCP/IP provides end-to-end connectivity of data. TCP/IP specifies how data should be grouped, addressed, transmitted, routed, and received at the destination address. The TCP/IP model, along with many of its protocols, is maintained and managed by the IETF (Internet Engineering Task Force). \n TCP/IP is one of two sets of protocols that collectively operate in the transport and network layers of the OSI model. \n In addition to creating message segments and ensuring connectivity, some of the basic characteristics of the IP protocol ensure that datagrams are routed to the correct destination using a binary addressing scheme. While the process of how the IP addresses are derived from binary (and hexadecimal relationships) is not covered in this course, it is important to know that just as computer CPUs use binary numbers to process data, networking hardware and protocols do so as well. \n 計算機網絡（包括最大的計算機網絡Internet）使用傳輸控制協議/ Internet協議或TCP / IP進行內部LAN / WAN上和外部Internet的網絡通信。 \n TCP / IP提供數據的端到端連接。TCP / IP指定如何在目標地址處對數據進行分組，尋址，傳輸，路由和接收。TCP / IP模型及其許多協議由IETF（Internet工程任務組）維護和管理。 \n TCP / IP是在OSI模型的傳輸層和網絡層中共同運行的兩組協議之一。 \n 除了創建消息段並確保連接性之外，IP協議的某些基本特徵還可以確保使用二進制尋址方案將數據報路由到正確的目的地。儘管本課程未介紹如何從二進制（和十六進制關係）派生IP地址的過程，但重要的是要知道，就像計算機CPU使用二進制數來處理數據一樣，網絡硬件和協議也是如此。 \n', 'tags': '', 'url': 'TCP IP.html'}, {'title': 'IPv4 and IPv6 Addresses', 'text': 'Network devices require a logical address — either an IPv4 or IPv6 address (see the network layer in the diagram above) — when moving data from one network segment to another. As we discussed in previous modules, switches make their intelligent switching decisions (see the data link layer in the diagram above based on media access control (MAC) addresses. The MAC address, also known as the physical address, is the unique identifier hard coded on a network interface card by the manufacturer. Switches use these MAC addresses to identify which devices are on which switch ports, and forward traffic within the network segment to the correct ports based on these addresses. When data traffic needs to cross the boundaries of the network, it requires a logical address that the router can use to make intelligent routing decisions. In most modern networks, this is done by using TCP/IP addressing. Historically, other protocols existed, such as internetwork packet exchange/sequenced packet exchange (IPX/SPX) for Novell networks, AppleTalk, and NetBEUI for Microsoft networks. TCP/IP replaced these protocols almost exclusively due to its robust nature, reliability, and availability. \n While the majority of our networks today still use IPv4, many networks are migrating to the newer IPv6 addressing standards. Additionally, many networks are offering dual support to both IPv4 and IPv6 during the transition. The reason for this transition is that we were running out of valid IPv4 addresses. IPv4 uses a 32-bit addressing scheme, providing only 4.2 billion available addresses, but IPv6 uses a 128-bit addressing scheme. IPv6 allows for 2128addresses, or 340,282,366,920,938,000,000,000,000,000,000,000,000 (3.4 x 1038) unique IP addresses. IPv6 allows for more IP addresses than humanity could ever utilize. At least that is what we think right now. \n 將數據從一個網段移動到另一個網段時，網絡設備需要邏輯地址-IPv4或IPv6地址（請參見上圖中的網絡層）。正如我們在之前的模塊中討論的那樣，交換機做出明智的交換決策（請參見上圖中的數據鏈路層，基於媒體訪問控制（MAC）地址。MAC地址，也稱為物理地址，是唯一的硬編碼標識符）交換機使用這些MAC地址來識別哪些設備在哪個交換機端口上，然後根據這些地址將網段內的流量轉發到正確的端口。在網絡中，它需要邏輯地址，路由器可以使用該邏輯地址來做出智能路由決策。在大多數現代網絡中，這是通過使用TCP / IP尋址完成的。從歷史上看，存在其他協議，例如Novell網絡的互聯網絡數據包交換/排序數據包交換（IPX / SPX），Apple網絡的AppleTalk和NetBEUI。由於TCP / IP的魯棒性，可靠性和可用性，它們幾乎完全取代了這些協議。 \n 儘管當今我們的大多數網絡仍使用IPv4，但許多網絡正在遷移到更新的IPv6尋址標準。此外，在過渡期間，許多網絡都對IPv4和IPv6提供雙重支持。進行此轉換的原因是我們用盡了有效的IPv4地址。IPv4使用32位尋址方案，僅提供42億個可用地址，而IPv6使用128位尋址方案。IPv6允許2 128地址或340,282,366,920,938,000,000,000,000,000,000,000,000（3.4×10 38）的唯一的IP地址。IPv6提供的IP地址超出了人類所能利用的範圍。至少這就是我們現在的想法。 \n', 'tags': '', 'url': 'IPv4 and IPv6 Addresses.html'}, {'title': 'Addressing Notation 尋址符號', 'text': 'Internet protocol (IP) networking relies on both an IP address and subnet mask using a 32-bit dotted decimal notation. The Internet Engineering Task Force (IETF) and the Internet Corporation for Assigned Names and Numbers (ICANN) developed and maintains the standards for IP allocation and protocols. \n Internet協議（IP）網絡使用32位點分十進製表示法同時依賴IP地址和子網掩碼。互聯網工程任務組（IETF）和互聯網名稱與數字地址分配機構（ICANN）制定並維護了IP分配和協議的標準。 \n Each octet is made up of eight bits (one byte or two nibbles); multiplied by four octets, that equals 32 bits. The maximum value for any octet is 255 (28-1) so therefore the maximum number of IPv4 addresses available is 232, which equals 4,294,967,296 unique addresses. \n The presence of the subnet mask tells networking devices how much of the IP address belongs to the network and how much to the host. The 255.255.255.0 subnet represents that the first three octets are the network and the “0” represents the available number of hosts (nodes). So, the form is N.N.N.H. Think of the combination of IP and subnet as similar to regular postal addresses. You need a zip code (subnet) and street address (host). \n There are five different classes in IPv4 labelled A through E, with classes A, B, and C used by computer networks and classes D and E reserved as experimental. As originally designed, the IP range is determined by the lead bits in the first octet and matched to one specific subnet mask. This is called "classful" addressing. When the IP class does not match the default subnet mask, it is called "classless." \n 每個八位位組由八位組成（一個字節或兩個半字節）。乘以四個八位位組，等於32位。任何八位位組的最大值為255（2 8 -1），因此可用的IPv4地址的最大數量為2 32，等於4,294,967,296個唯一地址。 \n 子網掩碼的存在告訴網絡設備多少IP地址屬於網絡，多少屬於主機。255.255.255.0子網表示前三個八位位組是網絡，“ 0”表示可用的主機（節點）數。因此，形式為NNNH。將IP和子網的組合視為類似於常規郵政地址。您需要一個郵政編碼（子網）和街道地址（主機）。 \n IPv4中有五種不同的類別，標記為A到E，計算機網絡使用的類別為A，B和C，D和E類別保留為實驗性。按照最初的設計，IP範圍由第一個八位位組中的前導位確定，並與一個特定的子網掩碼匹配。這稱為“有類”尋址。如果IP類與默認子網掩碼不匹配，則稱為“無類”。 \n \n', 'tags': '', 'url': 'Addressing Notation 尋址符號.html'}, {'title': 'Network and Host Addresses\xa0 網絡和主機地址', 'text': 'An IPv4 network address is further divided into two portions based upon the subnet mask: the network portion and the host portion. A subnet mask is a series of numbers used for routing traffic within a subnetwork. When a subnet mask is used to define the network portion, anywhere there is a binary “11111111” (or 255 in decimal) used, this area is considered part of the network portion. When a binary “00000000” (0 in decimal) is used, this represents the host portion of the address. The host represents a single device on the network, such as your computer or phone. \n IPv4網絡地址根據子網掩碼進一步分為兩部分：網絡部分和主機部分。子網掩碼是用於在子網內路由流量的一系列數字。當使用子網掩碼定義網絡部分時，在任何使用二進制“ 11111111”（或十進制255）的地方，該區域均被視為網絡部分的一部分。當使用二進制“ 00000000”（十進制為0）時，它表示地址的主機部分。主機代表網絡上的單個設備，例如您的計算機或電話。 \n As you can see, when the subnet mask has a 255 in it, it is defining the network portion of the address. In class A addresses, the first octet defines the network, and the last three define the host. In class B addresses, the first two octets define the network, the last two define the host. In class C addresses, the first three octets define the network, the last one defines the host. \n 如您所見，當子網掩碼中包含255時，它定義了地址的網絡部分。在A類地址中，第一個八位位組定義網絡，最後三個八位位組定義主機。在B類地址中，前兩個八位位組定義網絡，後兩個定義主機。在C類地址中，前三個八位位組定義網絡，最後一個八位位組定義主機。 \n Subnet masks are used to define the specific network we are referencing. A standard class A subnet mask of 255.0.0.0 is used for all networks where the first octet starts with a number between 1 and 126. \n 子網掩碼用於定義我們要引用的特定網絡。255.0.0.0的標準A類子網掩碼適用於所有第一個八位位組以1到126之間的數字開頭的網絡。 \n Therefore, this address fits into the class A category. In this course, we only deal with “classful” subnet masks — the ones that only contain values of 255 and 0. In future courses, you may see other subnet masks used to further break apart the networks. \n 因此，該地址屬於A類類別。在本課程中，我們僅處理“有類”子網掩碼-僅包含255和0的值。在以後的課程中，您可能會看到其他子網掩碼用於進一步拆分網絡。 \n To route your traffic over the Internet, you are required to have a publically routable IP address. These addresses are globally managed by the Internet Corporation for Assigned Names and Numbers (ICANN). If you desire to have one of these addresses, you must purchase them for use to ensure no one else has that specific number. For most users, this is done for you by your Internet service provider (ISP), but if you have a need for numerous public IP addresses, you can buy a block of them from ICANN. \n Private IP addresses, on the other hand, can be used by anyone without any prior coordination. This is because private IP addresses are not routable over the Internet and are only used inside your local area network. For example, at your home, you may have five computers hooked up to your switch and those machines are all using private IP addresses. When you make a request to go outside the network, like to visit a college’s website, your router performs a network address translation (NAT) that allows your private IP address to be converted into a public IP address and a port, which then makes the request on your behalf. There is a specific range of IP addresses that are reserved as private for internal use (by you and others). \n 要通過Internet路由流量，您需要具有可公共路由的IP地址。這些地址由互聯網名稱與數字地址分配機構（ICANN）全局管理。如果您希望擁有這些地址之一，則必須購買它們以確保沒有其他人擁有該特定號碼。對於大多數用戶而言，這是由Internet服務提供商（ISP）為您完成的，但是如果您需要大量的公共IP地址，則可以從ICANN購買其中的一部分。 \n 另一方面，任何人都可以使用私有IP地址，而無需事先協調。這是因為專用IP地址無法通過Internet路由，而只能在局域網內使用。例如，在家裡，您可能有五台計算機連接到交換機，而這些計算機都使用私有IP地址。當您發出訪問網絡的請求（例如訪問大學的網站）時，路由器會執行網絡地址轉換（NAT），該轉換可將您的私有IP地址轉換為公共IP地址和端口，從而使代表您提出要求。有一個特定範圍的IP地址保留為私有（供您和他人使用）供內部使用。 \n', 'tags': '', 'url': 'Network and Host Addresses\xa0 網絡和主機地址.html'}, {'title': 'IPv4 Data Flows IPv4數據流', 'text': 'In Internet protocol version 4, there are three types of data flows that can occur: unicast, broadcast, and multicast. \n The most common and most widely used is called unicast. In unicast communication, data travels from a single device to another single device on the network. For example, when you go to www.google.com in your web browser, your computer makes a request to one of Google’s web servers using unicast communication, and one of Google’s computers then sends the data back using unicast communication to just your computer. \n 在Internet協議版本4中，可以發生三種類型的數據流：單播，廣播和多播。 \n 最常見和最廣泛使用的方法稱為單播。在單播通信中，數據從網絡上的單個設備傳輸到另一個單個設備。例如，當您在網絡瀏覽器中訪問www.google.com時，您的計算機使用單播通信向一台Google的Web服務器發出請求，然後一台Google的計算機通過單播通信將數據發送回您的計算機。 \n When data is sent as a broadcast communication, it travels from a single device (such as your computer) to every other device on the network. This data will not travel outside the current subnet, though, when using broadcast. An example of broadcast communications would be if your system administrator was going to shut down a switch for maintenance. She may send out a broadcast message to everyone connected to that switch, warning them that their connectivity is going to be lost in the next ten minutes. You can think of this type of messaging like a teacher who is about to announce the next homework assignment. The teacher may say (or broadcast), “Class, here is your homework for tonight.” The message is directed at everyone in the class (or subnet) and they all should receive the message. \n 當數據作為廣播通信發送時，它從單個設備（例如您的計算機）傳輸到網絡上的所有其他設備。但是，使用廣播時，該數據不會在當前子網之外傳播。例如，如果您的系統管理員要關閉交換機進行維護，則為廣播通信。她可能會向連接到該交換機的每個人發出廣播消息，警告他們在接下來的十分鐘內將失去連接。您可以將這種消息傳遞想像為即將宣布下一個作業的老師。老師可能會說（或廣播）“課，這是你今晚的作業”。該消息針對班級（或子網）中的每個人，他們所有人都應該收到該消息。 \n The final method of data travel is called multicast. In multicast communication, data travels from a single device to multiple other devices on the network, but not necessarily to all of them, like it does when using broadcast communication. Also, this can expand outside of a single subnet. This works well when sharing a resource, such as streaming video. You can think of this type of communication as the Internet equivalent of watching satellite TV. For satellite TV, the signal is being sent out, but you have to “tune in” in order to receive (view) the data. \n', 'tags': '', 'url': 'IPv4 Data Flows IPv4數據流.html'}, {'title': 'Benefits of IPv6 IPv6的好處', 'text': 'IPv6 has many benefits over IPv4, the biggest of which is the number of available IP addresses. In IPv6, there is no broadcast provided, which frees up IP addresses, reduces the amount of traffic sent over the network, and increases bandwidth. Also, IPv6 doesn’t allow packets to be fragmented (broken into pieces) during transmission. This is handled by the protocol by resizing the maximum transmission unit size each time a session is created between two devices. \n A major benefit of IPv6 is that it allows for dual stack implementation, which means that IPv4 and IPv6 can run simultaneously on a device and provide service to the device from either protocol without conflict. IPv6 can also run on top of IPv4 as a tunneled protocol, thereby allowing it to run over older devices, as well. \n Lastly, the packet headers in IPv6 are much simpler than in IPv4. In IPv4, there are 12 fields that must be completely filled out (adding to overhead and complexity), but in IPv6 this was reduced to the bare minimum of five fields. This includes fields such as source and destination address, as well as quality of service priority. \n 與IPv4相比，IPv6有很多好處，其中最大的好處就是可用IP地址的數量。在IPv6中，沒有提供廣播，這釋放了IP地址，減少了通過網絡發送的流量，並增加了帶寬。此外，IPv6不允許在傳輸過程中將數據包分段（分成多個部分）。協議通過每次在兩個設備之間創建會話時調整最大傳輸單元大小來解決此問題。 \n IPv6的一個主要優點是它允許雙棧實現，這意味著IPv4和IPv6可以在設備上同時運行，並可以從任一協議向設備提供服務而不會發生衝突。IPv6還可以作為隧道協議在IPv4之上運行，從而也可以在較舊的設備上運行。 \n 最後，IPv6中的數據包頭比IPv4中的數據包頭簡單得多。在IPv4中，必須完全填寫12個字段（增加了開銷和復雜性），但是在IPv6中，此字段減少到最少五個字段。這包括諸如源地址和目標地址以及服務質量優先級之類的字段。 \n IPv6 Address Structure IPv6地址結構 \n While IPv6 has numerous improvements over IPv4, the most notable thing about IPv6 that people see is the format of the address. Instead of the dotted-decimal notation we used in IPv4 with addresses like 192.168.1.1, IPv6 uses eight groupings of four hexadecimal digits in each group. Each group is then broken apart by a colon (:). An example of an IPv6 address is 2002:0000:0000:0000:0000:0000:4815:54ae. \n A hexadecimal digit allows for counting from zero to 15 using the digits 0-9, then the letters A through F. Each hexadecimal digit replaces four binary digits (or four 1s and 0s), allowing us to write an IPv6 address using (at most) 32 hexadecimal digits. \n Luckily, the creators of IPv6 allowed for a shorthand. First, anytime there are leading zeros, they can be dropped. This is equivalent to dropping the leading zeros in the number 0010 to 10. The numbers are equivalent, as long as the zeros are in front of the other digits. The second shorthand technique involves several groupings of four zeros. When multiple groupings of four zeros are present, they can be represented by a double colon (::). Note that you can only use the double colon once per address, because the only way to know how many sets of zeros you’ve replaced with the double colon is to compare the shorthand address with the total number of bits available. \n 儘管IPv6相對於IPv4進行了許多改進，但是人們看到的關於IPv6的最值得注意的事情是地址的格式。IPv6不是在IPv4中使用像192.168.1.1這樣的地址使用的點分十進製表示法，而是在每個組中使用四個十六進制數字組成的八組。然後，每個組用冒號（:)分隔。IPv6地址的示例是2002：0000：0000：0000：0000：0000：0000：4815：54ae。 \n 十六進制數字允許使用數字0-9（從字母A到F）從零到15進行計數。每個十六進制數字都替換了四個二進制數字（或四個1和0），從而允許我們使用（最多）32個十六進制數字。 \n 幸運的是，IPv6的創建者允許使用簡寫形式。首先，只要有前導零，就可以將其丟棄。這等效於將數字0010中的前導零刪除為10。這些數字是等效的，只要零在其他數字的前面即可。第二種速記技術涉及四個零的幾個分組。當存在四個零的多個分組時，可以用雙冒號（：:)表示。請注意，每個地址只能使用雙冒號一次，因為知道用雙冒號替換了多少組零的唯一方法是將速記地址與可用位數進行比較。 \n', 'tags': '', 'url': 'Benefits of IPv6 IPv6的好處.html'}, {'title': 'IPv6 Data Flows\xa0 \xa0IPv6數據流', 'text': 'Data flows in IPv6 are similar to those in IPv4. In fact, unicast and multicast work identical to their IPv4 counterparts. But, because there is no broadcast in IPv6, it has been replaced with “anycast.” Anycast allows data to travel from a single source device to the nearest of multiple, but specific, devices on a network. Anycasting is designed to let one host initiate the efficient updating of router tables for a group of hosts. IPv6 can determine which gateway host is closest and sends the packets to that host as though it were a unicast communication. In turn, that host can anycast to another host in the group until all routing tables are updated. \n IPv6中的數據流類似於IPv4中的數據流。實際上，單播和多播的工作方式與IPv4相同。但是，由於IPv6中沒有廣播，因此已將其替換為“任何廣播”。Anycast允許數據從單個源設備傳輸到網絡上多個（但特定的）設備中最接近的一個。任意廣播旨在讓一個主機為一組主機啟動路由器表的有效更新。IPv6可以確定哪個網關主機最接近，並將數據包發送到該主機，就好像它是單播通信一樣。相應地，該主機可以向組中的另一台主機任意廣播，直到更新所有路由表為止。 \n The IP address always determines the class of a network and never the subnet. When the IP addresses match, the network is said to be using a “classful” scheme. However, this allows for many wasted IP addresses when a company needs more publicly routable IP addresses than the address class they are using offers. Classless inter-domain routing (CIDR) was developed in order to make the IP addressing scheme more efficient and to delay the depletion of IPv4 addresses. Essentially, some of the network bits in the default subnet mask are borrowed and used for the host portion of the network. For example, if a business needs 300 public IP addresses, then class C addresses would be too small because of the 254 device limitation, and class B would be excessively large. With CIDR, a business could be assigned an IP address range with a subnet of 255.255.254.0/23. In CIDR notation, “/23” indicates that the first 23 bits of the address are the network part of the address, which leaves the last nine bits for host addresses, rather than the eight bits that would be available in classful addressing. That means there will now be 510 IP numbers available rather than 254. \n IP地址始終確定網絡的類別，而不是子網。如果IP地址匹配，則稱網絡正在使用“分類”方案。但是，當公司需要比其使用的地址類別更多的可公共路由的IP地址時，這會浪費許多IP地址。開發無類域間路由（CIDR）是為了使IP尋址方案更有效並延遲IPv4地址的耗盡。本質上，默認子網掩碼中的某些網絡位被借用並用於網絡的主機部分。例如，如果一家企業需要300個公共IP地址，則由於254個設備限制，C類地址將太小，而B類將太大。使用CIDR，可以為企業分配一個IP地址範圍，其子網為255.255.254。0/23。在CIDR表示法中，“ / 23”表示地址的前23位是地址的網絡部分，剩下的最後9位用於主機地址，而不是分類尋址中可用的8位。這意味著現在將有510個IP號碼，而不是254個。 \n Private Vs. Public IP Addresses 私人vs. 公用IP地址 \n IPv4 depletion affects public addresses that are routable on the Internet by such devices as routers and servers, as well as the device used to connect your home to the Internet. Whether it is a cable modem, DSL, or FIOS, that device has a public IP address that communicates with your Internet service provider (ISP). This is an example of a WAN. The LAN (local area network) is wholly comprised of private IP addresses. \n IPv4耗盡會影響可通過路由器和服務器之類的設備以及用於將家庭連接到Internet的設備在Internet上路由的公用地址。無論是電纜調製解調器，DSL還是FIOS，該設備都具有與Internet服務提供商（ISP）通信的公共IP地址。這是WAN的示例。LAN（局域網）完全由專用IP地址組成。 \n In order for a LAN node to access the Internet, IPv4 uses network address translation (NAT), which is a technique where the gateway/router would replace the outgoing private IPv4 address with the publically routable address assigned by the ISP. \n 為了使LAN節點能夠訪問Internet，IPv4使用網絡地址轉換（NAT），這是網關/路由器將出站專用IPv4地址替換為ISP分配的可公開路由地址的技術。 \n Static Vs. Dynamic IP Addressing 靜態與 動態IP尋址 \n Historically, the client (a workstation or a printer) would be assigned a static IP address manually using the operating system IPv4 configuration. Remember, you must have unique IP addresses in any network. Imagine how difficult it was in a large corporation to track all the different nodes and IP addresses. Dynamic host configuration protocol (DHCP) solves this problem by having one device (a server or a router) automatically assign an IP address. In the current network structure, you would still assign static IP addresses to devices that must have guaranteed connectivity: servers, routers, managed switches, etc. However, DHCP can provide many benefits in networking maintenance with the abundant wireless devices such as cell phones, tablets, and laptops coming in and out of a network daily. Companies have developed policies for employees to bring their own devices to work, thus accessing the corporate network. DHCP will give the client setup parameters (gateway, domain, and name servers), keeping a specific pool of IP addresses, and offering timed leases for a device’s IP assignment. \n 從歷史上看，將使用操作系統IPv4配置為客戶端（工作站或打印機）手動分配靜態IP地址。請記住，任何網絡中都必須具有唯一的IP地址。想像一下，在一家大公司中跟踪所有不同的節點和IP地址有多麼困難。動態主機配置協議（DHCP）通過讓一台設備（服務器或路由器）自動分配IP地址來解決此問題。在當前的網絡結構中，您仍將靜態IP地址分配給必須保證連接性的設備：服務器，路由器，受管理的交換機等。但是，DHCP可以通過大量的無線設備（例如手機，平板電腦和筆記本電腦每天進出網絡。公司已製定政策，要求員工使用自己的設備來工作，從而訪問公司網絡。DHCP將提供客戶端設置參數（網關，域和名稱服務器），保留特定的IP地址池，並為設備的IP分配提供定時租約。 \n \n', 'tags': '', 'url': 'IPv6 Data Flows\xa0 \xa0IPv6數據流.html'}, {'title': 'APIPA\xa0 Link-Local\xa0 \xa0APIPA\xa0 本地鏈接', 'text': 'Link-local addresses are special addresses assigned by the operating system when either there is no statically assigned IP address, or the DHCP does not assign one to the network interface. Link-local addresses are not routable and only function in a LAN segment. In IPv4, the address range is 169.254.0.0/16 and the form is 169.254.x.x. In IPv6, the form is FE80::/64. In a Microsoft OS, the link-local address is referred to as automatic private IP addressing (APIPA). \n If you are troubleshooting an NIC (network interface card) that is supposed to be connected and you see a link-local address, this indicates that there is something wrong with the configuration because the OS assigned the address. \n 當沒有靜態分配的IP地址，或者DHCP沒有為網絡接口分配一個IP地址時，本地鏈接地址是操作系統分配的特殊地址。本地鏈接地址不可路由，只能在LAN網段中使用。在IPv4中，地址範圍為169.254.0.0/16，格式為169.254.xx。在IPv6中，格式為FE80 :: / 64。在Microsoft操作系統中，本地鏈接地址稱為自動專用IP尋址（APIPA）。 \n 如果要對應該連接的NIC（網絡接口卡）進行故障排除，並且看到鏈接本地地址，則表明配置有問題，因為操作系統分配了該地址。 \n', 'tags': '', 'url': 'APIPA\xa0 Link-Local\xa0 \xa0APIPA\xa0 本地鏈接.html'}, {'title': 'Client-side DHCP\xa0 \xa0客戶端DHCP', 'text': 'DHCP works by having an authoritative device, either a server or a router, offering to assign the IP address. In order for this to work, the client must be configured to look for the DHCP authority, and confirm that it will accept the IP assignment. These settings are located in “network connections” through either the network and sharing center or directly through the control panel. The configuration settings are located in the properties of the connection under either IPv4 or IPv6. \n DHCP通過擁有授權設備（服務器或路由器）來分配IP地址而起作用。為了使它起作用，必須將客戶端配置為尋找DHCP授權，並確認它將接受IP分配。這些設置通過網絡和共享中心位於“網絡連接”中，也可以直接通過控制面板位於“網絡連接”中。配置設置位於IPv4或IPv6下的連接屬性中。 \n', 'tags': '', 'url': 'Client-side DHCP\xa0 \xa0客戶端DHCP.html'}, {'title': 'Client-side DNS settings\xa0 \xa0客戶端DNS設置', 'text': 'The domain name system (DNS) is a part of the Internet protocol that translates IP addresses to name addresses. There is a setting located in the network properties section of the IPv4 or IPv6 property window that allows for the manual setting of the the domain name system (DNS) server address. The local DNS cache will keep a local record of IP address to name conversion for both LAN devices and Internet addresses. Alternate DNS server addresses can be added to the client to assist in name resolution, thus improving data flow. \n 域名系統（DNS）是Internet協議的一部分，該協議將IP地址轉換為名稱地址。IPv4或IPv6屬性窗口的網絡屬性部分中有一個設置，允許手動設置域名系統（DNS）服務器地址。本地DNS緩存將保留IP地址到LAN設備和Internet地址的名稱轉換的本地記錄。可以將備用DNS服務器地址添加到客戶端以幫助名稱解析，從而改善數據流。 \n Gateway 網關 \n The gateway is the device that connects different networks types together. In most SOHO (small office, home office) environments today, this is the router that connects the LAN to the ISP modem through the WAN port (cable, DSL, or FIOS), which provides Internet access. In a larger corporate environment, it is the last router in the LAN that connects to a WAN link, and then passes the IP packets to their destination. The difference is that in a larger corporate environment, there can be multiple LAN segments and routers between the client workstation and the gateway. \n 網關是將不同網絡類型連接在一起的設備。在當今的大多數SOHO（小型辦公室，家庭辦公室）環境中，這是通過WAN端口（電纜，DSL或FIOS）將LAN連接到ISP調製解調器的路由器，可以提供Internet訪問。在較大的公司環境中，它是LAN中的最後一個路由器，它連接到WAN鏈接，然後將IP數據包傳遞到其目的地。區別在於，在較大的公司環境中，客戶端工作站和網關之間可以有多個LAN網段和路由器。 \n Windows networking is nearly identical in all aspects from Vista through to Windows 10. To access the network settings, go to either the control panel, then “network and Internet,” then “network and sharing center,” or right-click the “open network and sharing center” icon in the system tray (next to the clock). \n 從Vista到Windows 10，Windows聯網在各個方面都幾乎相同。要訪問網絡設置，請轉到控制面板，然後依次單擊“網絡和Internet”，“網絡和共享中心”，或右鍵單擊“打開”。網絡和共享中心”圖標（位於時鐘旁邊）。 \n Remember, a technician will ensure settings fit the current network. Most networks are set up with DHCP, which will provide the workstation with an IP address, gateway, and DNS server address. \n Double-click the IPv4 properties dialogue box and set both radio buttons to “obtain (an IP address/DNS server address) automatically.” The window on the right in the image below allows for the APIPA address to be automatically assigned or for the user to configure a static IPv4 address. \n 請記住，技術人員將確保設置適合當前網絡。大多數網絡都設置有DHCP，它將為工作站提供IP地址，網關和DNS服務器地址。 \n 雙擊IPv4屬性對話框，並將兩個單選按鈕設置為“自動獲取（IP地址/ DNS服務器地址）”。下圖右側的窗口允許自動分配APIPA地址或允許用戶配置靜態IPv4地址。 \n Overview 總攬 \n In this lesson, we will discuss transmission control protocol (TCP) and user datagram protocol (UDP), as well as their associated ports and protocols. We will specifically address the various email ports and protocols in use today, as well as discussing secure sockets layer/transport layer security (SSL/TLS) in the context of web security. Then, we will discuss file transfer protocol (FTP) and hypertext transfer protocol (HTTP) and their use on the Internet today, as well as some older technologies such as Telnet and its more secure alternative, secure shell (SSH). \n 在本課程中，我們將討論傳輸控制協議（TCP）和用戶數據報協議（UDP），以及它們相關的端口和協議。我們將專門解決當今使用的各種電子郵件端口和協議，並在Web安全的背景下討論安全套接字層/傳輸層安全性（SSL / TLS）。然後，我們將討論文件傳輸協議（FTP）和超文本傳輸協議（HTTP）及其在當今Internet上的使用，以及一些較老的技術，例如Telnet及其更安全的替代方法，安全外殼（SSH）。 \n TCP is a connection-oriented protocol that ensures the reliable transport of data segments from one device to another. During transmission, if a segment is dropped, it will be detected and resent or retransmitted by the originator device. Each communication is acknowledged upon receipt, providing a secure model to ensure successful communications. This type of transmission is great for all network data types, especially those that need delivery to be assured. \n When a TCP communication is initiated, the originator and receiver perform a “three-way handshake” before starting the data transmission. In the first step, the originator sends a packet with a synchronization (SYN) flag set. Next, the receiver acknowledges receipt of this SYN flagged packet by sending back a synchronization-acknowledged (SYN-ACK) flagged packet. Finally, the originator sends an acknowledgement of the synchronization-acknowledged flagged packet, and then data transmission occurs. \n TCP是一種面向連接的協議，可確保將數據段從一台設備可靠地傳輸到另一台設備。在傳輸過程中，如果某個段丟失，則發起方設備將檢測到該段並將其重新發送或重新傳輸。每次通信在收到後都會得到確認，從而提供一個安全的模型來確保成功進行通信。這種傳輸方式適用於所有網絡數據類型，尤其是那些需要確保傳輸的網絡數據類型。 \n 當啟動TCP通信時，發起方和接收方在開始數據傳輸之前執行“三向握手”。第一步，發起方發送一個設置了同步（SYN）標誌的數據包。接下來，接收器通過發回一個同步確認（SYN-ACK）標記數據包來確認此SYN標記數據包的接收。最後，始發者發送對已同步確認的標記數據包的確認，然後發生數據傳輸。 \n', 'tags': '', 'url': 'Client-side DNS settings\xa0 \xa0客戶端DNS設置.html'}, {'title': 'TCP Vs. UDP\xa0 TCPVs。UDP協議', 'text': 'TCP and UDP have many differences. TCP is reliable, but UDP is unreliable. TCP focuses on connection-oriented communications using the three-way handshake, while UDP is connectionless. TCP uses windowing, discussed in more detail later, to control the amount of data sent at a given time based on changing network speeds, but UDP simply transmits everything once with no windowing. TCP also supports segment sequencing; UDP just hopes it gets to the destination in the right order. Finally, TCP waits for acknowledgements, but UDP just hopes it got there. To simplify it, TCP is an assured and reliable communication method, UDP is just a best-effort model. \n learn by doing \n TCP和UDP有許多區別。TCP是可靠的，但UDP是不可靠的。TCP專注於使用三向握手的面向連接的通信，而UDP是無連接的。TCP使用開窗（稍後將詳細討論）來基於不斷變化的網絡速度來控制在給定時間發送的數據量，但是UDP僅傳輸所有信息一次而沒有開窗。TCP還支持段排序；UDP只是希望它以正確的順序到達目的地。最後，TCP等待確認，但是UDP只是希望它到達目的地。為簡化起見，TCP是一種有保證且可靠的通信方法，UDP只是一種盡力而為的模型。 \n', 'tags': '', 'url': 'TCP Vs. UDP\xa0 TCPVs。UDP協議.html'}, {'title': 'TCP Windowing\xa0 \xa0TCP窗口', 'text': 'TCP also supports a concept called windowing. If you have ever copied a file from a network share drive on the Windows operating system, you have seen windowing. Have you ever noticed when you copy a file over the network, it may start out saying there are “2 minutes remaining” until completion, then it jumps up to “3 hours remaining,” then back down to “30 minutes remaining”? This is TCP windowing in action. \n Essentially, when a communication session is established with TCP, it first performs the three-way handshake. Next, it starts with a small window size, like windows size 1 in the image below, where a single segment is sent over the network and acknowledged. If this is successful, it increases the window size to 2, sending two segments at a time. It continues to do this, increasing the number of segments each time, transmitting more data in each window until an error occurs and retransmissions must be done. If errors occur, TCP understands that it must have been transmitting too fast, so it shrinks the window to slow down communication. As transmissions occur successfully, it again increases the window to push more data in each window. This window size is continually adjusted to get the most segments per window with the least errors in communication. \n TCP還支持稱為窗口化的概念。如果您曾經從Windows操作系統上的網絡共享驅動器中復製過文件，則會看到窗口。您是否曾經註意到通過網絡複製文件時，它可能會說“剩餘2分鐘”直到完成，然後跳到“剩餘3小時”，然後又跳回到“剩餘30分鐘”？這是TCP窗口在起作用。 \n 本質上，當使用TCP建立通信會話時，它首先執行三向握手。接下來，它以較小的窗口大小開始，如下面的圖片中的窗口大小1所示，其中單個段通過網絡發送並確認。如果成功，它將窗口大小增加到2，一次發送兩個段。它繼續執行此操作，每次增加段數，在每個窗口中傳輸更多數據，直到發生錯誤並必須重新傳輸為止。如果發生錯誤，TCP知道它一定傳輸速度太快，因此它縮小了窗口以減慢通信速度。隨著傳輸成功進行，它將再次增加窗口以在每個窗口中推送更多數據。 \n Each client and server has an IP address. Clients and servers are identified on the network by their IP addresses. In addition to an IP address, each machine has numerous “ports” that we can utilize. A port is an endpoint to a logical connection. A client program specifies a particular server program on a computer in a network by identifying a port. Ports allow a single client to communicate simultaneously with multiple other devices, separating each session by using a designated port number. \n 每個客戶端和服務器都有一個IP地址。客戶端和服務器通過其IP地址在網絡上進行標識。除了IP地址外，每台機器都有許多我們可以利用的“端口”。端口是邏輯連接的端點。客戶端程序通過識別端口來指定網絡中計算機上的特定服務器程序。端口允許單個客戶端與多個其他設備同時通信，並使用指定的端口號分隔每個會話。 \n', 'tags': '', 'url': 'TCP Windowing\xa0 \xa0TCP窗口.html'}, {'title': 'Email\xa0 \xa0電子郵件', 'text': 'Email has evolved a lot over the years, but still operates on three main protocols. Simple mail transfer protocol (SMTP) is an Internet standard for sending email and most outbound email is sent using SMTP. SMTP uses port 25 to send email from network devices. \n POP3 is the most common account type for personal email, but messages are typically deleted from the server when you check your email. \n Internet message access protocol (IMAP) servers let you work with email messages without downloading them to your computer first. This allows for email to be synchronized (synced) across multiple devices, including your desktop, laptop, tablet, and smartphone. IMAP uses port 143 to receive and synchronize your email. The real benefit of using IMAP, especially in today’s multiple device access world, is that it can change the read and delete state of messages across the multiple devices. For example, if I read a message on my phone, when I log into my desktop, the message will also show as having been read already. \n 多年來，電子郵件已經有了很大的發展，但仍在三種主要協議上運行。簡單郵件傳輸協議（SMTP）是用於發送電子郵件的Internet標準，大多數出站電子郵件都是使用SMTP發送的。SMTP使用端口25從網絡設備發送電子郵件。 \n POP3是最常見的個人電子郵件帳戶類型，但是當您檢查電子郵件時，通常會將郵件從服務器中刪除。 \n Internet郵件訪問協議（IMAP）服務器使您可以處理電子郵件，而無需先將其下載到計算機上。這允許跨多個設備（包括台式機，筆記本電腦，平板電腦和智能手機）同步電子郵件。IMAP使用端口143接收和同步您的電子郵件。使用IMAP的真正好處（尤其是在當今的多設備訪問世界中）是，它可以更改跨多個設備的消息的讀取和刪除狀態。例如，如果我在手機上閱讀了一條消息，則當我登錄到桌面時，該消息也將顯示為已被閱讀。 \n', 'tags': '', 'url': 'Email\xa0 \xa0電子郵件.html'}, {'title': 'HW2', 'text': '亂數分組: \n \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': '10 List Overlap Comprehensions \n 15 Reverse Word Order \n 21 Write To A File \n', 'tags': '', 'url': 'HW3.html'}, {'title': '其他', 'text': '', 'tags': '', 'url': '其他.html'}, {'title': 'Develop', 'text': '\n https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'TEST', 'text': '', 'tags': '', 'url': 'TEST.html'}]};