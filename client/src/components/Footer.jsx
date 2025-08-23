export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-gray-500 flex justify-between">
        <p>© {new Date().getFullYear()} MediTrack • For demo/education only.</p>
        <p>Not a substitute for professional medical advice.</p>
      </div>
    </footer>
  );
}
