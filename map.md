# 车辆追踪与监控管理平台 - 地图

## GPS 坐标偏移问题


引用自[百度地图开放平台](https://lbs.baidu.com/index.php?title=jspopularGL/guide/coorinfo)

> 
    目前国内主要有以下三种坐标系：

    WGS84：为一种大地坐标系，也是目前广泛使用的GPS全球卫星定位系统使用的坐标系。

    GCJ02：又称火星坐标系，是由中国国家测绘局制订的地理信息系统的坐标系统。由WGS84坐标系经加密后的坐标系。

    BD09：为百度坐标系，在GCJ02坐标系基础上再次加密。其中bd09ll表示百度经纬度坐标，bd09mc表示百度墨卡托米制坐标。

    非中国地区地图，服务坐标统一使用WGS84坐标。

相关资料：

- [Restrictions on geographic data in China - Wikipedia](https://en.wikipedia.org/wiki/Restrictions_on_geographic_data_in_China#GPS_shift_problem)

- [A Short Guide To The Chinese Coordinate System. GCJ-02(gcj 02) Explained(https://abstractkitchen.com/blog/a-short-guide-to-chinese-coordinate-system/)

- [wandergis/coordtransform: 提供了百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和WGS84坐标系之间的转换](https://github.com/wandergis/coordtransform)

### 实现

- 使用地图服务

```mermaid
graph TD
    subgraph "数据源"
        A[部标地理数据]
        B[Google Maps Data]
    end

    subgraph "服务器"
        C[管理平台后端]
        F[坐标转换]
    end

    subgraph "WEB 端"
        D[Google Maps JavaScript API]
        E[网页浏览器]
    end

    A --> C
    C --> F
    F --> D
    B --> D
    D --> E

    style A fill:#f9f,stroke:#333
    style B fill:#f9f,stroke:#333
    style C fill:#bbf,stroke:#333
    style D fill:#bfb,stroke:#333
    style E fill:#bfb,stroke:#333
    style F fill:#bbf,stroke:#333
```

- 使用 OpenStreetMap

```mermaid
graph TD
    subgraph "数据源"
        A[JT808 设备]
        B[OpenStreetMap 瓦片服务器]
    end

    subgraph "服务端"
        C[JT808 协议服务器]
        D[队列 / 缓存（视数据量）]
        E[数据处理]
        F[数据库 / PostGIS]
        G[WebSocket Server]
        H[REST API Server]
    end

    subgraph "客户端"
        I[Leaflet.js]
        J[浏览器]
    end

    subgraph "地图功能"
        L[实时数据]
        M[历史数据]
        N[地理围栏]
        O[自定义标记]
    end

    A -->|地理数据| C
    B -->|瓦片数据| I
    C --> D
    D --> E
    E --> F
    E --> G
    F --> H
    G -->|WebSocket| I
    H -->|HTTP| I
    I --> J
    J --> L
    J --> M
    J --> N
    J --> O

    style A fill:#f9f,stroke:#333
    style B fill:#f9f,stroke:#333
    style C fill:#bbf,stroke:#333
    style D fill:#bbf,stroke:#333
    style E fill:#bbf,stroke:#333
    style F fill:#bfb,stroke:#333
    style G fill:#bfb,stroke:#333
    style H fill:#bfb,stroke:#333
    style I fill:#ffb,stroke:#333
    style J fill:#ffb,stroke:#333
    style L fill:#ddd,stroke:#333
    style M fill:#ddd,stroke:#333
    style N fill:#ddd,stroke:#333
    style O fill:#ddd,stroke:#333
```

## 价格

高德 ¥ 50,000 https://lbs.amap.com/upgrade#business

百度 ¥ 50,000 https://lbs.baidu.com/cashier/auth

## 参考

- [WebGIS Development in 2023: A Guide to the Tools and Technologies I Use for Building Advanced Geospatial Applications](https://opensourcegisdata.com/webgis-development-2023-guide-tools-technologies-for-building-advanced-geospatial-applications.html)

- [百度地图 API SDK](https://lbs.baidu.com/index.php?title=jspopularGL/guide/helloworld)

- [静态地图 | 高德地图API](https://lbs.amap.com/api/webservice/guide/api/staticmaps/)