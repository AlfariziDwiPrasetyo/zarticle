import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Mengarahkan pengguna kembali ke halaman utama setelah login
      return "/"; // Ganti dengan URL yang diinginkan, misalnya "/"
    },
  },
  pages: {
    signIn: "/auth/signin", // Halaman login kustom jika Anda ingin
  },
});
