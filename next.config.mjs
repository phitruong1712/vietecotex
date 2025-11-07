/** @type {import('next').NextConfig} */
const nextConfig={
  experimental:{typedRoutes:true},
  async redirects(){
    return[
      {
        source:'/:path*',
        has:[{type:'host',value:'www.vietecotex.com'}],
        destination:'https://vietecotex.com/:path*',
        permanent:true,
      },
    ];
  },
};
export default nextConfig;
