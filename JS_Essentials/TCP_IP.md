# TCP/IP Explained

## TCP/IP kya hota hai?

TCP/IP internet ka basic communication system hai.

Full Form:

- TCP = Transmission Control Protocol
- IP = Internet Protocol

Simple words me:

> TCP/IP rules ka ek set hai jo devices ko internet par communicate karne deta hai.

---

# Real Life Example 📦

Socho tum kisi dost ko parcel bhej rahe ho.

## TCP ka kaam

- Parcel ko properly pack karta hai
- Check karta hai sab parts sahi pahuche ya nahi
- Agar kuch missing ho to dobara bhejta hai

## IP ka kaam

- Parcel ko sahi address tak pahunchata hai

---

# Internet me kya hota hai?

Jab tum website open karte ho:

```text
google.com
```

To TCP/IP background me kaam karta hai.

---

# Basic Flow

```text
Your Device
     ↓
TCP/IP
     ↓
Internet
     ↓
Server
```

---

# TCP kya karta hai?

TCP reliable communication provide karta hai.

## TCP Features

### 1. Data ko packets me todta hai

Example:

```text
Hello World
```

Packets:

```text
Packet 1 = Hello
Packet 2 = World
```

---

### 2. Correct Order maintain karta hai

Packets galat order me aaye to sahi order me arrange karta hai.

---

### 3. Missing data dobara mangta hai

Agar koi packet missing ho gaya:

```text
Packet 2 missing ❌
```

TCP usko dobara request karega.

---

### 4. Connection establish karta hai

Communication start hone se pehle connection banata hai.

---

# IP kya karta hai?

IP ka kaam addressing aur routing hai.

Simple words me:

> Data ko source se destination tak pahunchana.

---

# IP Address

Internet par har device ka ek address hota hai.

Example:

```text
192.168.1.1
```

---

# TCP/IP Working Example

Tum YouTube open karte ho 📱

```text
You
 ↓
TCP breaks data into packets
 ↓
IP sends packets to YouTube server
 ↓
Server replies back
 ↓
TCP reassembles packets
 ↓
Video plays
```

---

# TCP vs IP

| TCP | IP |
|---|---|
| Reliable delivery | Addressing & routing |
| Data order maintain karta hai | Packet ko destination tak bhejta hai |
| Error checking karta hai | Path find karta hai |

---

# TCP/IP Layers

TCP/IP model me 4 layers hoti hain.

---

## 1. Application Layer

User applications yaha kaam karti hain.

Examples:
- HTTP
- HTTPS
- FTP
- DNS

---

## 2. Transport Layer

TCP/UDP yaha kaam karte hain.

Kaam:
- Data transfer
- Error checking

---

## 3. Internet Layer

IP yaha kaam karta hai.

Kaam:
- Routing
- Addressing

---

## 4. Network Access Layer

Physical connection handle karta hai.

Examples:
- WiFi
- Ethernet

---

# TCP/IP Model Diagram

```text
Application Layer
        ↓
Transport Layer (TCP)
        ↓
Internet Layer (IP)
        ↓
Network Access Layer
```

---

# TCP vs UDP

| TCP | UDP |
|---|---|
| Reliable | Fast |
| Connection-oriented | Connectionless |
| Error checking | Less checking |
| Slower | Faster |

---

# Examples

## TCP Used In

- Websites
- Email
- File Transfer

---

## UDP Used In

- Online Games
- Video Calls
- Live Streaming

---

# Why TCP/IP Important?

Without TCP/IP:
- Internet work nahi karega
- Devices communicate nahi kar payenge
- Websites open nahi hongi

---

# One-Line Definition

> TCP/IP internet communication protocols ka set hai jo data ko packets me bhejkar devices ke beech reliable communication karata hai.